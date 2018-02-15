import React, { Component } from 'react';
import { View, Image, AsyncStorage, ScrollView, RefreshControl} from 'react-native';
// import Config from 'react-native-config';
import { Container, Content, Header, Body, Title, H1, H2, H3, List, ListItem, Text } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      city: 'Berlin',
      state: 'Germany',
      weatherData: [],
      weatherIconUrl: '-',
      weather: '-',
      temp_String: '-',
      country_iso3166: '-',
      relative_humidity: '-',
      wind: '-',
      visibility: '-',
      dewpoint: '-',
    };
  }

  async _loaddata() {
    let cityVal = await AsyncStorage.getItem('city'); 
    let stateVal = await AsyncStorage.getItem('state'); 
    if(typeof cityVal == 'string') {
      this.setState({ 
        city: cityVal,
        state: stateVal, 
      }); 
    }
  }

  _updateData() {
    this._loaddata();
    fetch(`http://api.wunderground.com/api/aa2058cdd7e44bd9/conditions/forecast/q/${this.state.state}/${this.state.city}.json`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          weatherData: responseJson,
        }, () => {
          const currentData = this.state.weatherData.current_observation;
          this.setState({
            weatherIconUrl: currentData.icon_url,
            weather: currentData.weather,
            temp_String: `${currentData.temp_c} \u00B0C / ${currentData.temp_f} \u00B0F`,
            country_iso3166: currentData.display_location.country_iso3166,
            relative_humidity: currentData.relative_humidity,
            wind: `${currentData.wind_string}  -  ${currentData.wind_dir}, ${currentData.wind_kph}kph`,
            visibility: `${currentData.visibility_km}km`,
            dewpoint: currentData.dewpoint_string,
          });
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  componentDidMount() {
    this._updateData();
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this._loaddata();
    fetch(`http://api.wunderground.com/api/aa2058cdd7e44bd9/conditions/forecast/q/${this.state.state}/${this.state.city}.json`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          weatherData: responseJson,
        }, () => {
          const currentData = this.state.weatherData.current_observation;
          this.setState({
            refreshing: false,
            weatherIconUrl: currentData.icon_url,
            weather: currentData.weather,
            temp_String: `${currentData.temp_c} \u00B0C / ${currentData.temp_f} \u00B0F`,
            country_iso3166: currentData.display_location.country_iso3166,
            relative_humidity: currentData.relative_humidity,
            wind: `${currentData.wind_string}  -  ${currentData.wind_dir}, ${currentData.wind_kph}kph`,
            visibility: `${currentData.visibility_km}km`,
            dewpoint: currentData.dewpoint_string,
          });
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ fontWeight: 'bold' }}>RNWeather</Title>
          </Body>
        </Header>
        <Content style={styles.body}>
          <ScrollView refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }>
          <View style={styles.weatherView}>
            <View style={styles.locationView}>
              <H1 style={styles.weatherCityText}>{this.state.city} </H1><H1 style={styles.weatherStateText}>{this.state.state}[{this.state.country_iso3166}]</H1>
            </View>
            <View style={styles.stateView}>
              <Image style={styles.weatherIcon} source={{ uri: this.state.weatherIconUrl }} />
              <H3 style={styles.weatherDisplayText}>{this.state.weather}</H3>
            </View>
            <H2 style={styles.tempDisplayText}>{this.state.temp_String}</H2>
            <List style={{ paddingTop: 20 }}>
              <ListItem itemDivider style={styles.list}>
                <Text style={styles.listCats}>Relative Humidity: {this.state.relative_humidity}</Text>
              </ListItem>
              <ListItem itemDivider style={styles.list}>
                <Text style={styles.listCats}>Wind: {this.state.wind}</Text>
              </ListItem>
              <ListItem itemDivider style={styles.list}>
                <Text style={styles.listCats}>Visibility: {this.state.visibility}</Text>
              </ListItem>
              <ListItem itemDivider style={styles.list}>
                <Text style={styles.listCats}>Dewpoint: {this.state.dewpoint}</Text>
              </ListItem>
            </List>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
