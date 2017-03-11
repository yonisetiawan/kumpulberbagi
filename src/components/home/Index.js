import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Text } from 'react-native'

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

                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Copyright @kumpulberbagi</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
