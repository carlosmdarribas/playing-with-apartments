import mongoose, { Document } from 'mongoose';
import db from '../database'

/**
 * @typedef User
 * @property {ObjectId} _id - User's ID.
 * @property {string} username - User's username.
 * @property {string} name - User's name
 * @property {string} surname - User's surname
 * @property {string} email - User's email
*/


interface User extends Document {
    username:   string;
    surname:    string;
    email:      string;
    name:       string;
}

db;

const userSchema = new mongoose.Schema<User>({
    username:   { type: String, required: true },
    surname:    { type: String, required: true },
    email:      { type: String, required: true },
    name:       { type: String, required: true }
});

const UserModel = mongoose.model<User>("user", userSchema, "user");

export { User, userSchema, UserModel };