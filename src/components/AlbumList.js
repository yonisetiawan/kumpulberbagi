import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentDidMount() {
      // http://localhost:4040/product
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}))
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
          .then(res => res.json())
          .then(response => this.setState({albums: response}))
    }
    renderAlbums() {
        return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album}/>);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }

}

export default AlbumList
