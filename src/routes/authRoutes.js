import { Router } from 'express';
import { celebrate } from 'celebrate';
import { registerUser, loginUser, logoutUser, refreshUserSession } from '../controllers/authController.js';
import { registerUserSchema, loginUserSchema } from '../validations/authValidation.js';
import { authenticate } from "../middleware/authenticate.js";

const authRoutes = Router(authenticate);

authRoutes.post('/auth/register', celebrate(registerUserSchema), registerUser);
authRoutes.post('/auth/login', celebrate(registerUserSchema), loginUser);
authRoutes.post('/auth/logout', logoutUser);
authRoutes.post('/auth/refresh', refreshUserSession);



export default authRoutes;