import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends Component {
    state = {}

    onTermSubmit = async term => {
        const respone = await youtube.get('/search',{
            params: {
                q: term
            }
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App
