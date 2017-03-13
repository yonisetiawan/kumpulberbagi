import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon
} from 'native-base';
import {View, Text, WebView, StyleSheet} from 'react-native'


export default class Youtube extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Header>
                  <Left>
                    <Icon active name='home' onPress={() => this.props.navigator.popToTop()}/>
                  </Left>
                  <Body>
                      <Title>KumpulBerbagi</Title>
                  </Body>
                  <Right />
              </Header>
                <WebView source={{
                    uri: this.props.route.youtubeurl
                }} javaScriptEnabled={true}/>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text style={{color: 'white'}}>@kumpulberbagi</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
