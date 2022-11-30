const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

  try {
    // Get all projects and JOIN with user data
    const pData = await Post.findAll({
      include: [{ model: User }],
    });


    const posts = pData.map((post) => post.get({ plain: true }));
    
    // Pass serialized data and session flag into template
    res.render('all-post', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const post = postData.get({ plain: true });

    const comments = commentData.map((comment) => comment.get({ plain: true }));


    const commentData = await Comment.findAll({
      where: {
          post_id: req.params.id 
      },
      include: [ { model: User }, { model: Post }]
  });
    res.render('Post', {
      ...post,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/createaccount', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('createaccount');
});

module.exports = router;