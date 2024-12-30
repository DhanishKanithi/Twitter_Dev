const TweetService = require('../services/tweet-service');

const upload = require('../config/file-upload-s3-config');

const singleUploader = upload.single('image');

const tweetService = new TweetService();

const createTweet = async (req,res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if(err) {
                return res.status(500).json({error: err});
            }
            console.log('Image url is', req.file);
            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
          // console.log(response);

            return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
            data: response,
            err: {}
            });
        });
        // console.log('inside create tweet');
        // console.log(req.body);
    
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