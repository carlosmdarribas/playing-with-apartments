import app from './app';
import config from './config'

const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'API made for interacting with "Apartments" interfaces.',
            title: 'playing-with-apartments Documentation',
            version: '1.0.0',
        },
        host: `${config.PUBLIC_SERVER_URL}:${config.PUBLIC_SERVER_PORT}` ,
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: config.PUBLIC_SERVER_HTTPS,
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./controller/*/*.ts', './controller/*.ts'] //Path to the API handle folder
};
expressSwagger(options)

app.listen(app.get('PUERTO'), () =>{
   console.log('Lanzada en el PUERTO', app.get('PUERTO')); 
});