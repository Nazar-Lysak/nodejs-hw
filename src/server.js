import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import studentsRoutes from './routes/studentsRoutes.js';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
await connectMongoDB();

app.use(cors());
app.use(logger);
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

// Кореневий маршрут
app.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Hello world!' });
});

// Кореневий маршрут
app.get('/notes', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({"message": `Retrieved note with ID: ${noteId}`});
});

// Маршрут для тестування middleware помилки
app.get('/test-error', (req, res) => {
  throw new Error('something went wrong');
});

app.use(studentsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});