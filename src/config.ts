import dotenv from 'dotenv';
import path from 'path';

console.log("[config] enviroment: " + process.env.NODE_ENV)

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

console.log("[config] enviroment: " + process.env.NODE_ENV)

export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'playing-with-apartments',
    MONGO_USER: process.env.MONGO_USER || '',
    MONGO_PASS: process.env.MONGO_PASS || '',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || '27017',
    PUBLIC_SERVER_URL: process.env.PUBLIC_SERVER_URL || '172.16.0.14',
    PUBLIC_SERVER_PORT: process.env.PUBLIC_SERVER_PORT || '2777',
    PUBLIC_SERVER_HTTPS: process.env.PUBLIC_SERVER_HTTPS || ['HTTPS'],
    PORT: process.env.PORT || '2777',
    JWT_KEY: process.env.JWT_KEY || 'UEhkmDS3AqKnwmDXWKkz7V9M7HeTmu',
}
