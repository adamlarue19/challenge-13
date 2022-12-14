const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const postRoutes = require('./post-routes.js');
const commentRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
// router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;