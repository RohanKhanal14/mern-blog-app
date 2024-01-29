import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js';
export const userRoutes = express.Router();

userRoutes.get('/',getUsers);
userRoutes.post('/',createUser);
userRoutes.get('/:id',getUser);
userRoutes.put('/:id',updateUser);
userRoutes.delete('/:id',deleteUser);
