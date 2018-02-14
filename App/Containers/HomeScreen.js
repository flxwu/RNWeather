import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
// import Config from 'react-native-config';
import { Container, Content, Header, Body, Title, H1, H2, H3 } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Berlin',
      state: 'Germany',
      weatherData: [],
      weatherIconUrl: '-',
      weather: '-',
      temp_c: '-',
    };
  }

  componentDidMount() {
    return fetch(`http://api.wunderground.com/api/aa2058cdd7e44bd9/conditions/forecast/q/${this.state.state}/${this.state.city}.json`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          weatherData: responseJson,
        }, () => {
          this.setState({
            weatherIconUrl: this.state.weatherData.current_observation.icon_url,
            weather: this.state.weatherData.current_observation.weather,
            temp_c: this.state.weatherData.current_observation.temp_c,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ fontWeight: 'bold' }}>Home</Title>
          </Body>
        </Header>
        <Content style={styles.body}>
          <View style={styles.weatherView}>
            <H1 style={styles.weatherDisplayText}>{this.state.city}, {this.state.state}</H1>
            <Image style={styles.weatherIcon} source={{ uri: this.state.weatherIconUrl }} />
            <H3 style={styles.weatherDisplayText}>{this.state.weather}</H3>
            <H2 style={styles.weatherDisplayText}>{`${this.state.temp_c}\u00B0`}</H2>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
