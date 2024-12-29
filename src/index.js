const express = require('express');
const connect = require('./config/database');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', apiRoutes);

 const TweetRepository = require('./repository/tweet-repository');
// const TweetService = require('./services/tweet-service');
// const Comment = require('./models/comment')
// const Tweet = require('./models/tweet')
// const HashtagRepository = require('./repository/hashtag-repository');
const {UserRepository} = require('./repository/index');
const LikeService = require('./services/like-service');

app.listen(3000, async () => {
    console.log('Server started on PORT: 3000' );
    await connect();
    console.log('Mongo db connected');
    // const tweet = await  Tweet.create({
    //     content: 'First tweet',
    //     userEmail: 'rohit@user.com'
    // });

    // const tweets = await Tweet.find();
    // console.log(tweets);

    // const tweetRepo = new TweetRepository();

   //  const tweet = await tweetRepo.get('67542712a54db54c82fccc54');

    // const tweet = await tweetRepo.update('67542712a54db54c82fccc54', 
    //     {content: 'new latest content'}
    // ); // Updates to new data but Returns old data

    // const tweet = await tweetRepo.update('67542712a54db54c82fccc54', 
    //     {content: 'new latest content'}
    // ); // Updates to new data and Returns old data because has set {new:true} inside update function in tweet-repository

    // const tweet = await tweetRepo.create({content: 'My tweet with a comment'});
    // console.log(tweet);
    // tweet.comments.push({content: 'first comment'});
    // await tweet.save(); // Before create a comment collection. i.e Before association


    // const tweet = await tweetRepo.create({content: 'Tweet with comment Schema'});
    // const comment = await Comment.create({content: 'new comment'});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();  // After creating a comment collection. i.e After association

    // const tweet = await tweetRepo.get('676ba4ee126b20c8ba054005');
    // console.log(tweet);     // Does not populate the comment. i.e: Just displays comment's object ID inside a document

    // const tweet = await tweetRepo.getWithComments('676ba4ee126b20c8ba054005');
    // console.log(tweet); // Now the comments section will be populated.. As we have specified .populate({path: 'comments'}) 

    // const tweet = await tweetRepo.getAll(2,4);
    // console.log(tweet);     // Implementing offset and limit in pagination. i.e displaying first four or first four skipping first 2.

    // const tweet = await tweetRepo.getAll();
    // console.log(tweet[0].contentWithEmail);     // Implementing virtuals 

    // const tweet = await tweetRepo.create({content: 'This is a tweet with hooks'});
    // console.log(tweet);     // Implementing hooks
    
    // const tweets = await Tweet.find({
    //     content:  ['First tweet', 'my tweet', 'new latest content']
    // });
    // console.log(tweets);


    // let repo = new HashtagRepository();
    // await repo.bulkCreate([
    //     {
    //         title: 'Trend',
    //         tweets: []
    //     }, 
    //     {
    //         title: 'Excited',
    //         tweets: []
    //     },
    //     {
    //         title: 'Python',
    //         tweets: []
    //     },
    //     {
    //         title: 'Fun',
    //         tweets: []
    //     }
    // ]); 

    // let repo = new HashtagRepository();
    // let response = await repo.findByName(['Excited', 'Trend']);
    // // console.log(response);
    // response = response.map(tags => tags.title);
    // console.log(response);

    // const service = new TweetService();
    // const tweet = await service.create({
    //     content: 'My 2nd favorite film is #KGF2 and watching it is fun'
    // });
    // console.log(tweet);

    
    /*
    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository()
    const tweets = await tweetRepo.getAll(0,10);
    const users = await userRepo.getAll();
    // const user = await userRepo.create({
    //   email: 'nitish@admin.com',
    //   password: 'Nitish@123',
    //   name: 'Nitish Kumar Reddy'
    // });

    const likeService = new LikeService();
    await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);
    */

});