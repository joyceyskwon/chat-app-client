import React from 'react'
import Tweet from './Tweet'
import NewTweetInfo from './NewTweetInfo'
import adapter from '../services/adapter'

const deleteTweet = tweetId => adapter.deleteTweet(tweetId)

const TweetList = ({ tweets, newTweetCount, handleDisplayTweets }) => {

  // tweets are reversed props from Feed.js
  const tweetList = tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} deleteTweet={deleteTweet} />)

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

export default TweetList
