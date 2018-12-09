import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Body, List, ListItem, Text, Button } from "native-base";
import axios from "axios";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Soil Graph Data"
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [{ dayCount: 1, moistureLevel: 50 }]
    };
  }
  async componentDidMount() {
    let response = [];
    try {
      response = await axios.get(
        "http://node-express-env.hhkvipq4ps.us-west-2.elasticbeanstalk.com/get-water-data"
      );
      this.setState({ data: response.data });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <View>
        <Button
          style={{
            alignSelf: "left",
            marginTop: 50,
            height: 50,
            width: 100
          }}
          success
          onPress={async () => {
            let response = [];
            try {
              response = await axios.get(
                "http://node-express-env.hhkvipq4ps.us-west-2.elasticbeanstalk.com/get-water-data"
              );
              this.setState({ data: response.data });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Text
            style={{
              fontSize: 20,
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            Refresh
          </Text>
        </Button>
        <View style={{ alignItems: "center" }}>
          <VictoryChart width={400} theme={VictoryTheme.material}>
            <VictoryBar data={this.state.data} x="dayCount" y="moistureLevel" />
          </VictoryChart>
        </View>
        <View>
          <List
            dataArray={this.state.data}
            renderRow={(item, index) => (
              <ListItem
                first={index === 0}
                last={index === this.state.data.length - 1}
              >
                <Body>
                  <Text style={{}}>
                    {`Day ${item.dayCount} : Moisture Level : ${
                      item.moistureLevel
                    }`}
                  </Text>
                </Body>
              </ListItem>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50
  },
  tableView: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50
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
