import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { View, StyleSheet, Platform, Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Input,
  Form,
  Item,
  Label,
  Button
} from "native-base";
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Container>
        <Content>
          <ListItem icon>
            <Body>
              <Text>Auto Water</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <Form>
            <Item floatingLabel>
              <Label>Minimum Threshold</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Water Distribution</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Water Timer (Count/Hour)</Label>
              <Input />
            </Item>
          </Form>
          <Button
            style={{
              alignSelf: "center",
              marginTop: 50,
              height: 50,
              width: 100
            }}
            success
            onPress={() => {
              Alert.alert(
                "Sucess",
                "Preferences saved sucessfully!",
                [{ text: "OK" }],
                { cancelable: false }
              );
            }}
          >
            <Text
              style={{
                fontSize: 20,
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              Save
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
