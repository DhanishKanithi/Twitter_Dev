const TweetService = require('../services/tweet-service');

const tweetService = new TweetService();

const createTweet = async (req,res) => {
    try {
        // console.log('inside create tweet');
        // console.log(req.body);
        const response = await tweetService.create(req.body);
       // console.log(response);

        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
             data: response,
             err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create a new tweet',
             data: {},
            err: error
        });
    }
}

const getTweet = async(req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched a tweet',
            data: response,
            err: {}
        });
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        });
    }
}
module.exports = {
    createTweet,
    getTweet
}