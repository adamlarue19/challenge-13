const router = require('express').Router();
const userRoutes = require('./userRoutes');
const catchRoutes = require('./catchRoutes');

router.use('/users', userRoutes);
router.use('/catches', catchRoutes);

module.exports = router;
