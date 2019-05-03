import React, { Component } from 'react'
import Tweet from './Tweet'
import NewTweetInfo from './NewTweetInfo'
import adapter from '../services/adapter'

class TweetList extends Component {
  
  // deleteTweet = tweetId => adapter.deleteTweet(tweetId)
  
  // tweets are reversed props from Feed.js
  const tweetList = tweets => tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} deleteTweet={this.deleteTweet} />)
  
  render() {
    return (
      <div>
        <NewTweetInfo
          handleDisplayTweets={handleDisplayTweets}
          newTweetCount={newTweetCount}
        />
        <div className="ui feed">
          {tweetList}
        </div>
      </div>
    )
  }
}

export default TweetList
