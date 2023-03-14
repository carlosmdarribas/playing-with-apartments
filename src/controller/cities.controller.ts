import { RequestHandler } from "express";
import { City, CityModel } from '../schemas/cities.model'

import { isValidObjectId } from '../helpers'

/**
 * @typedef City
 * @property {ObjectId} _id - City indentifier.
 * @property {string} 	city_name - City's address.
 */

/**
 * Get all cities.
 * @route GET /api/cities
 * @group Citites - City-related operations.
 * @returns {Array<User>} 200 - Users array.
 * @returns {object} 500 - Internal server error
*/

export const getAllCities:RequestHandler = async (req, res) => {
    try {
        let cities = await CityModel.find({}).exec();
		res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}