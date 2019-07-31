// ********************
// puerto
// ********************

process.env.PORT = process.env.PORT || 3000

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGODB_URI;
}

process.env.URLDB = urlDB;

process.env.CLIENT_ID = process.env.CLIENT_ID || '963923900470-6igb3tsc5279sfjh8im1b214vqivtlfn.apps.googleusercontent.com';