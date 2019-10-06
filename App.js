import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";
import { Content, Card, CardItem, Thumbnail } from 'native-base';
import coded from "./coded.png"
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { location-arrow } from '@fortawesome/free-solid-svg-icons'
export default function App() {
  return (

    <Container>
      <Header noShadow>
        <Left>
          <Button transparent>
            <Icon name="camera" />
          </Button>
        </Left>
        <Body>
          <Title>InstaCoded</Title>
        </Body>
        <Right>
          <Button transparent>
            {/* <Icon name="paper-plane" /> */}
            <Icon active name="location-arrow" type="FontAwesome" />

          </Button>
        </Right>
      </Header>


      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://cdn.auth0.com/blog/react-js/react.png' }} />
              <Body>
                <Text>ReactNative</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={coded} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="heart" />
                <Text> 12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text> 4 Comments</Text>
              </Button>
            </Body>
            <Right>
              {/* <FontAwesomeIcon icon={location-arrow} /> */}

              <Icon active name="location-arrow" type="FontAwesome" />
              {/* <Text>11h ago</Text> */}
            </Right>
          </CardItem>
        </Card>
      </Content>





    </Container>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
