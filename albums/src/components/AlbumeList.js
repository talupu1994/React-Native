import React,{Component} from 'react';
import {View,ScrollView} from 'react-native';
import AlbumeDetails from './AlbumeDetails';

class AlbumeList extends Component{
    state = {albums : [] };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then( (response) => response.json())
        .then ((responseData) => {
            this.setState({albums : responseData});
        });
    }

    renderAlbume(){
        return this.state.albums.map(album => 
            <AlbumeDetails key={album.title} currentAlbum={album}/>
        );
    }


    render(){
        //console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbume()}
            </ScrollView>
        );
    }
}

export default AlbumeList;