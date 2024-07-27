require('dotenv').config();
const express = require('express');
const app = express();


const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./controllers/users');
const getIntoRouter = require('./controllers/login');
const getCategory = require('./controllers/getCategory');
const home = require('./controllers/home');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { PAGE_URL } = require('./config');

const { UserExtractor } = require('./middleware/auth');
//const { authAdmin } = require('./middleware/authAmin');

const personalitation = require('./controllers/getAdmin');
//const adminpersonalitation = require('./controllers/adminPersonalitation');
const categories = require('./controllers/categories');
const categorieget = require('./controllers/categorieget');
const verificationAdmin = require('./controllers/verificationAdmin');

const saveDbShirtsCaps = require('./controllers/saveDbShirtsCaps');
const getProducts = require('./controllers/getProducts');
const  updateDb = require('./controllers/updateDb');
const deleteProduct = require('./controllers/deleteProduct');
const edit = require('./controllers/edit');
const deleteCookie = require('./controllers/deleteCookie');
const saveWatch = require('./controllers/saveWatch');
const getWatch = require('./controllers/getWatch');
const saveGlasses = require('./controllers/saveGlasses');
const getGlasses = require('./controllers/getGlasses');
const deleteGlass = require('./controllers/deleteGlass');
const deleteWatch = require('./controllers/deleteWatch');
const editGlass = require('./controllers/editGlass');
const updateGlass = require('./controllers/updateGlass');
const editWatch = require('./controllers/editWatch');
const updateWatch = require('./controllers/updateWatch');
const extractShirts = require('./controllers/extractShirts');
const extractWatch = require('./controllers/extractWatch');
const extractGlass = require('./controllers/extractGlass');
const closeSection = require('./controllers/closeSection');

//conexion a mongo db

(async() => {

  try {

    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log(PAGE_URL);
    console.log('Conectado a Mongo db');

  } catch (error) {

    console.log(error);

  }
})();

const link = ['http://localhost:3000'];
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//rutas frontend

app.use('/', express.static(path.resolve('views', 'home')));

app.use('/categories/:id?', express.static(path.resolve('views', 'categories')));

app.use('/personalitation', express.static(path.resolve('views', 'personalitation')));

app.use('/styles', express.static(path.resolve('styles')));//styles css

app.use('/img', express.static(path.resolve('views','img')));

app.use('/signup', express.static(path.resolve('views','signup')));

app.use('/createaccount', express.static(path.resolve('views','createaccount')));

app.use('/editproduct/:id?', express.static(path.resolve('views','editproduct')));

app.use('/admi', express.static(path.resolve('views', 'administrador')));

app.use('/editglass/:id?', express.static(path.resolve('views', 'editglass')));

app.use('/editwatch/:id?', express.static(path.resolve('views', 'editwatch')));

app.use(morgan('tiny'));

//rutas backend

app.use('/api/users', usersRouter);
app.use('/api/login', getIntoRouter);
app.use('/api/home', UserExtractor, home);
app.use('/api/categories', categories);
app.use('/api/categorieget', categorieget);
app.use('/api/verificationAdmin', verificationAdmin);
//app.use('/api/adminpersonalitation', authAdmin, adminpersonalitation);
app.use('/api/personalitation', personalitation);
app.use('/api/getCategory', getCategory);
app.use('/api/saveDbShirtsCaps', saveDbShirtsCaps);
app.use('/api/getproducts', getProducts);
app.use('/api/updateDb', updateDb);
app.use('/api/deleteProduct', deleteProduct);
app.use('/api/deleteCookie', deleteCookie);
app.use('/api/saveWatch', saveWatch);
app.use('/api/getWatch', getWatch);
app.use('/api/saveGlasses', saveGlasses);
app.use('/api/getGlasses', getGlasses);
app.use('/api/deleteGlass', deleteGlass);
app.use('/api/deleteWatch', deleteWatch);
app.use('/api/edit', edit);
app.use('/api/editGlass', editGlass);
app.use('/api/updateGlass', updateGlass);
app.use('/api/editWatch', editWatch);
app.use('/api/updateWatch', updateWatch);
app.use('/api/extractShirts', extractShirts);
app.use('/api/extractwatch', extractWatch);
app.use('/api/extractGlass', extractGlass);
app.use('/api/closeSection', closeSection);

module.exports = app;



