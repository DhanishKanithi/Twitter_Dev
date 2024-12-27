const Hashtag = require('../models/hashtags');

class HashtagRepository {
    
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    // async getWithComments(id) {
    //     try {
    //         const tweet = await Tweet.findById(id).populate({path: 'comments'});
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async update(tweetId, data) {
    //     try {
    //         const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new:true});
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch(error) {
            console.log(error);
        }
    }

    // async getAll(offset, limit) {
    //     try {
    //         const tweet = await Tweet.find().skip(offset).limit(limit);
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
            })//.select('title -_id');
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;