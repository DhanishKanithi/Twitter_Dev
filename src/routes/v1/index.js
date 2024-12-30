const express = require('express');

const {createTweet, getTweet} = require('../../controllers/tweet-controller');
const {toggleLike} = require('../../controllers/like-controller');
const {createComment} = require('../../controllers/comment-controller');
const {signup, login} = require('../../controllers/auth-controller');
const router = express.Router();

const {authenticate} = require('../../middlewares/authenticate');

router.post('/tweets', authenticate, createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle', toggleLike ); 

router.post('/comments', authenticate,  createComment);

router.post('/signup', signup);

router.post('/login', login);

module.exports = router;