import React, { Component } from 'react';
import { Text, View, Image, Linking, WebView } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// const AlbumDetail = ({ album }) => {
class AlbumDetail extends Component {

  render () {
    const { title, artist, thumbnail_image, image, url } = this.props.album;
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </CardSection>

        <CardSection>
          <Button navigator={this.props.navigator} onPress={() =>
              this.props.navigator.push({page: 'loginform', youtubeurl: url})
            }>
            Get Free
          </Button>
        </CardSection>
      </Card>
    );
  }

};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
