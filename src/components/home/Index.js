import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Text } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                      <Icon active name='flame' />
                    </Left>
                    <Body>
                        <Title>KBerbagi</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>@kumpulberbagi</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
