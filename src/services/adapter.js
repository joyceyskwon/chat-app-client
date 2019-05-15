const API_URL = `http://localhost:3000/api/v1`

const API_WS_ROOT = 'ws://localhost:3000/api/v1/cable'

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const createTweet = tweet => {
  debugger
  return fetch(`${API_URL}/tweets`, {
    method: 'POST',
    headers,
    body: JSON.stringify(tweet)
  })
  .then(res => res.json())
}

const fetchFeed = feedId => {
  return fetch(`${API_URL}/feeds/${feedId}`)
  .then(res => res.json())
}

export default { createTweet, fetchFeed, API_WS_ROOT }
