import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import Home from '../footer/home';
import Camera from '../footer/camera';
import Chat from '../footer/chat'
import Setting from '../footer/setting';
import Profile from '../footer/profile';



class Splash extends Component {


  constructor(props) {
    super(props);

    this.state = {
      permisssion: false,
      index: 0
    }
  }


  render() {
    const { index } = this.state;
    let App = Home;
    if (index === 0) {
      App = Home;
    }
    else if (index === 1) {
      App = Camera;
    }
    else if (index === 2) {
      App = Chat;
    }
    else if (index === 3) {
      App = Setting;
    }
    else {
      App = Profile;
    }


    return (
      // <View style={{ alignItems: 'center', position: 'absolute', bottom: 0 }}>
      //   <Chat />
      // </View>
      <Container>
        <Content >
          <App />
        </Content>

        <Footer>
          <FooterTab >
            <Button vertical onPress={() => this.setState({ index: 0 })}>
              <Icon name="home" />
            </Button>
            <Button vertical onPress={() => this.setState({ index: 1 })}>
              <Icon name="camera" />
            </Button>
            <Button vertical onPress={() => this.setState({ index: 2 })} >
              {/* <Badge ><Text >10</Text></Badge> */}
              <Icon name="paper-plane" />
            </Button>
            <Button vertical onPress={() => this.setState({ index: 3 })}>
              <Icon name="settings" />
            </Button>
            <Button vertical onPress={() => this.setState({ index: 4 })}>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>


    );

  }
}



export default Splash;