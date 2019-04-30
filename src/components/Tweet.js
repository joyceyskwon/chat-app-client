import React, { Component } from 'react'

class Tweet extends Component {
  render() {
    return (
      <div className="event">
        <div className="ui card">
          <div className="content">
            <div className="summary">
              {this.props.tweet.content}
            </div>
            <div className="meta">
              <a className="like">
                <i className="like icon" /> 4 Likes
              </a>
              <button
                className="ui basic blue button"
                onClick={() => this.props.deleteTweet(this.props.tweet.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet
