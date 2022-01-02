import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/youtube'

class App extends Component {
    state = { videos: [], selectedVideo: null }

    onTermSubmit = async term => {
        const respone = await youtube.get('/search',{
            params: {
                q: term
            }
        })

        this.setState({ videos: respone.data.items })
    }

    onVideoSelect = video => {
        console.log('From the App!', video)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App
