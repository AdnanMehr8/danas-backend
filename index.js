const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const usersRoute = require('./routes/users');
const batchRoute = require('./routes/batch');
const machineRoute = require('./routes/machines');
const productRoute = require('./routes/products');
const categoriesRoute = require('./routes/categories');
const createAdminAccount = require('./scripts/admin');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', 
  // origin: 'https://danas-frontend.vercel.app', 

  credentials: true, 
}));

  // // Handle pre-flight requests
  app.options('*', cors());
  
  // app.use(
  //   cors({
  //     origin: function (origin, callback) {
  //       return callback(null, true);
  //     },
  //     optionsSuccessStatus: 200,
  //     credentials: true,
  //   })
  // );
  // Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', signupRoute);
app.use('/auth', loginRoute);
app.use('/api', usersRoute);
app.use('/api', batchRoute);
app.use('/api/equipment', machineRoute);
app.use('/api/products', productRoute);
app.use('/api/categories', categoriesRoute);
// app.use('/api/dispensing', require('./routes/dispensing'));
// app.use('/api/mixing', require('./routes/mixing'));
// app.use('/api/compression', require('./routes/compression'));
// app.use('/api/coating', require('./routes/coating'));
// app.use('/api/masterdata', require('./routes/masterData'));


// In your Express server
app.get('/auth/check', (req, res) => {
  if (req.cookies.accessToken) {
      // You may want to further verify the token here
      res.status(200).json({ authenticated: true });
  } else {
      res.status(401).json({ authenticated: false });
  }
});

// Handle unhandled routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

createAdminAccount();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});