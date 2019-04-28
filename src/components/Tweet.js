import React from 'react'

const Tweet = ({ tweet }) => {
  return (
    <div className="event">
      <div className="ui card">
        <div className="content">
          <div className="summary">
            {tweet.content}
          </div>
          <div className="meta">
            <a className="like">
              <i className="like icon" /> 4 Likes
            </a>
            <button className="ui basic blue button" onClick={props.deleteTweet(props.tweet.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
