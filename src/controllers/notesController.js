// import createHttpError from 'http-errors';

export const getNotes = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Retrieved all notes' });
};

export const getNotesById = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${id}` });
};
