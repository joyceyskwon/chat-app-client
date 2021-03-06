import React, { Component } from 'react'
import Tweet from './Tweet'
import NewTweetInfo from './NewTweetInfo'

const TweetList = ({ tweets, newTweetCount, handleDisplayTweets }) => {
  
  // tweets are reversed props from Feed.js
  const tweetList = tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
  
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
