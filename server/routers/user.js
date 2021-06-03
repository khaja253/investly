const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');


router.post('/api/sign-up', ctrlUser.signup);
router.post('/api/log-in', ctrlUser.login);

module.exports = router;