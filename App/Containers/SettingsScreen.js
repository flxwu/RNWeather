import React, { Component } from 'react';
import { View , AsyncStorage } from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Button, Text, Label } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingsScreenStyle';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      city: 'Berlin',
      state: 'Germany',
    }
  }

  componentDidMount() {
    this._loaddata();
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

  async _persistData() {
    try {
      await AsyncStorage.setItem('city', this.state.city);
      await AsyncStorage.setItem('state', this.state.state);
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ fontWeight: 'bold' }}>Settings</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.inputContainer}>
            <Form style={styles.form}>
              <Item>
                <Label style={styles.formText}>City</Label>
                <Input value={this.state.city} onChangeText={(city) => this.setState({city})}/>
              </Item>
              <Item>
                <Label style={styles.formText}>State/Country</Label>
                <Input value={this.state.state} onChangeText={(state) => this.setState({state})}/>
              </Item>
            </Form>
            <Button style={styles.saveButton} onPress={() => this._persistData()}>
              <Text style={{ fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>Save Changes</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
