import React, { Component } from 'react'
import TweetForm from './TweetForm'
import TweetList from './TweetList'
import { ActionCable } from 'react-actioncable-provider'
import adapter from '../services/adapter'

class Feed extends Component {
  state = {
    displayedTweets: [],
    newTweets: []
  }

  componentDidMount() {
    adapter.fetchFeed(5)
    .then(res => {
      if(res.tweets) {
        this.setState({
          displayedTweets: res.tweets.reverse()
        })
      } else {
        debugger
        return this.state.displayedTweets
      }
    })
  }

  addTweet = tweet => {
    this.setState(prevState => {
      return {
        newTweets: [...prevState.newTweets, tweet]
      }
    })
  }

  handleDisplayTweets = () => {
    this.setState(prevState => {
      return {
        displayedTweets: [
          ...prevState.newTweets,
          ...prevState.displayedTweets
        ],
        newTweets: []
      }
    })
  }

  render() {
    const { displayedTweets, newTweets } = this.state

    return (
      <div className="Feed">
        <h1>CHIT CHAT</h1>
        <ActionCable
          channel={{channel: 'FeedChannel'}}
          onReceived={(tweet) => {
            this.addTweet(tweet)
          }}
        />
        <TweetForm addTweet={this.addTweet} />
        <TweetList
          handleDisplayTweets={this.handleDisplayTweets}
          newTweetCount={newTweets.length}
          tweets={displayedTweets}
        />
      </div>
    )
  }
}

export default Feed