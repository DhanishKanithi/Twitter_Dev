const mongoose = require('mongoose');

const hashTagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true});

hashTagSchema.pre('save', function (next) {
     this.title = this.title.toLowerCase();
     next();
})

const Hashtag = mongoose.model('Hashtag', hashTagSchema);
module.exports = Hashtag;