const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
   useUnifiedTopology: true, 
   connectTimeoutMS: 20000, // 10 seconds
},
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;