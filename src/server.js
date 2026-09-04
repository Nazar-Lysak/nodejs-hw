import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import notesRoutes from './routes/notesRoutes.js';
import { errors } from 'celebrate';

import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
await connectMongoDB();

app.use(cors());
app.use(logger);
app.use(express.json({
  limit: '100kb',
}));

app.use(notesRoutes);
app.use(authRoutes);  

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
