import createHttpError from 'http-errors';
import { Student } from '../models/student.js';

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};

export const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};
