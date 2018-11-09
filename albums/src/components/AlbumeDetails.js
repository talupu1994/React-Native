import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumeDetails = ({currentAlbum}) =>{
    const {title,artist,thumbnail_image,image,url} = currentAlbum;
    const {
        thumbnailStyle ,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
        } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri:thumbnail_image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri:image}}/>
            </CardSection>

            <CardSection>
                <Button  onPress={() => Linking.openURL(url)}>
                    <Text>Buy Me!</Text>
                </Button>
            </CardSection>
        </Card>
    );
};

const styles={
    headerContentStyle:{
        flexDirectio:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginLeft:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }

};

export default AlbumeDetails;