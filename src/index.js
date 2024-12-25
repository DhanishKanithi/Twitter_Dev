const express = require('express');
const connect = require('./config/database');

const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')

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

    const tweetRepo = new TweetRepository();

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

    const tweet = await tweetRepo.getWithComments('676ba4ee126b20c8ba054005');
    console.log(tweet); // Now the comments section will be populated.. As we have specified .populate({path: 'comments'}) 
});