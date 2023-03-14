import mongoose, { Schema, Document } from 'mongoose';
import db from '../database'

import { User } from './user.model'
import { City } from './cities.model';

/**
 * @typedef Apartment
 * @property {ObjectId} aparment_id - Apartment indentifier.
 * @property {string} 	city_id - Aparment's city ID.
 * @property {string} 	owner_user_id - Aparment's owner ID.
 * @property {integer} 	size - Aparment's size in square meters (m^2).
 * @property {integer} 	rooms_number - Aparment's rooms number.
 * @property {integer} 	baths_number - Aparment's baths number.
 * @property {string} 	address - Aparment's address.
 */



interface Aparment extends Document {
    city_id:        City['_id'];
    owner_user_id:  User['_id'];
    size:           number;
    rooms_number:   number;
    baths_number:   number;
    address:        string;
} db;

const apartmentSchema = new mongoose.Schema<Aparment>({
    city_id:        { type: Schema.Types.ObjectId, required: true },
    owner_user_id:  { type: Schema.Types.ObjectId, required: true },
    size:           { type: Number, required: true },
    rooms_number:   { type: Number, required: true },
    baths_number:   { type: Number, required: true },
    address:        { type: String, required: true }
});

const ApartmentModel = mongoose.model<Aparment>("apartment", apartmentSchema, "apartment");

export { Aparment, apartmentSchema, ApartmentModel };