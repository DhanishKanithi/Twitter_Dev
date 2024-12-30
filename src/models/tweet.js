const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    image: {
            type: String
        },
    // hashtags: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Hashtag'
    //     }
    // ],
    
    // userEmail: {
    //     type: String
    // },
    comments: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Comment'
        }
    ]
}, {timestamps: true});

// tweetSchema.virtual('contentWithEmail').get(function process() {
//     return `${this.content} \nCreated by: ${this.userEmail}`;
// });

// tweetSchema.pre('save', function (next) {
//     console.log('Inside a hook');
//     next();
// });

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet; 