import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Text } from 'react-native'
import AlbumList from '../AlbumList'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>KumpulBerbagi</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                      <AlbumList />
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text style={{color: 'white'}}>@kumpulberbagi</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
