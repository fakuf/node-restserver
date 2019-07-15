// ********************
// puerto
// ********************

process.env.PORT = process.env.PORT || 3000

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://facundofalcone16:CqK0WNLF87Z3c7AU@cluster0-crhdc.mongodb.net/cafe'
}

process.env.URLDB = urlDB;