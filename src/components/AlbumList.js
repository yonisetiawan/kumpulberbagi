import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentDidMount() {
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}))
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data})).catch((err)=>console.log(err))
        // fetch('http://localhost:8080/product')
        //   .then(res => res.json())
        //   .then(response => this.setState({albums: response}))
        //   .catch((err)=>console.log(err))
    }
    renderAlbums() {
        return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album} navigator={this.props.navigator}/>);
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
