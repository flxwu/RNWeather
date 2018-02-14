import React, { Component } from 'react';
import { Container, Header, Body, Title } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingsScreenStyle';

class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={{ alignItems: 'center' }}>
            <Title style={{ fontWeight: 'bold' }}>Settings</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default SettingsScreen;
