import React from "react";
import "./styles.css";
import Search from "./components/Search";
import youtubeApi from './api/youtube';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';




export default class App extends React.Component {
 
  state = {
      videosMetaInfo: [],
      selectedVideoId: null
    };

  onVideoSelected = videoID =>{
    this.setState({
      selectedVideoId:videoID
    })
  }
  onSearch =async keyword =>{
    const response =await youtubeApi.get("/search",{
      params:{
        q:keyword
      }
    });

    

    this.setState({
      videoMetainfo:response.data.items,
      selectedVideoId:response.data.items[0].id.videoID
    })
    console.log(this.State)
  }; 

  render() {
      return (
        <div className="App">
          <Search onSearch={this.onSearch}/>
          <VideoList onVideoSelected={this.onVideoSelected}
          data={this.state.videoMetaInfo}/>
          <VideoPlayer videoID ={this.state.selectedVideoId}/>
        </div>
      );
    }
   
  }