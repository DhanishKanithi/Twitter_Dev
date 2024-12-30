const {TweetRepository, HashtagRepository} = require('../repository/index')

class TweetService{
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        // console.log('inside service layer' , content);
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                    .map((tag) => tag.substring(1).toLowerCase());

        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        const response = await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tweet.save();
        })
        // let currTags = await this.hashtagRepository.findByName(tags);
        // currTags.forEach( (tag) => {
        //     tweet.hashtags.push(tag.id);
        //     tweet.save();
        // })
        
        //console.log(response);

        // todo create hashtags and add here
        /*
            1. bulkcreate in mongoose
            2. filter title of hashtag based on multiple tags
            3. How to add tweet id inside all the hashtags
        */
        return tweet;
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

module.exports = TweetService; 