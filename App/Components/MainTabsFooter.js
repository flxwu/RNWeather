import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Footer, FooterTab, Icon, Text, Button } from 'native-base';

import styles from './Styles/MainTabsFooterStyle';

export default class MainTabsFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={styles.footerTab}>
          <Button
            style={styles.buttonStyle}
            vertical
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <Icon name="md-home" />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('SettingsScreen')}
          >
            <Icon name="md-settings" />
            <Text>Settings</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('AboutScreen')}
          >
            <Icon name="md-information-circle" />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
