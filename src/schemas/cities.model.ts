import mongoose, { Schema, Document } from 'mongoose';
import db from '../database'
import { User } from './user.model'

/**
 * @typedef City
 * @property {ObjectId} _id - City indentifier.
 * @property {string} 	city_name - City's address.
 */

interface City extends Document {
    city_name:        string;
} db;

const citySchema = new mongoose.Schema<City>({
    city_name: { type: String, required: true }
});

const CityModel = mongoose.model<City>("city", citySchema, "city");

export { City, citySchema, CityModel };