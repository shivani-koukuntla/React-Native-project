import axios from 'axios';

const key ="AIzaSyBfQAR0sayUfhwQfXKWS-TCh3zTsZP2pxo"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults:15,
      key: KEY
    },
    headers: {}
  });

  
  