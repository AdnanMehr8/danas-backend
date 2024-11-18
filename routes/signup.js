const express = require('express');
const signupController = require('../controllers/signup');
const router = express.Router();

router.post('/register', signupController.createUser);

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const UserService = require('../services/signup');


// const userController = new UserService();

// router.post('/register',
  
//   async (req, res) => {
//     try {
//       const user = await userController.createUser(req.body);
//       res.status(201).json(user);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }
// );

// router.get('/register',

//   async (req, res) => {
//     try {
//       const users = await userController.getUsers();
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }
// );

// router.put('/register/:id',
//   async (req, res) => {
//     try {
//       const user = await userController.updateUser(req.params.id, req.body);
//       res.json(user);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }
// );

// router.delete('/register/:id',
//   async (req, res) => {
//     try {
//       await userController.deleteUser(req.params.id);
//       res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }
// );

// module.exports = router;