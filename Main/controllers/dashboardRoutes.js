const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {

    try {
        // Get all post and JOIN with user data
        const pData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: User }],
        });


        const posts = pData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});