import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Footer, FooterTab, Icon, Text, Button } from 'native-base';

import styles from './Styles/MainTabsFooterStyle';

export default class MainTabsFooter extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <Footer>
        <FooterTab style={styles.footerTab}>
          <Button
            active={this.props.navigationState.index === 0}
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <Icon style={styles.buttonText} name="md-home" />
            <Text style={styles.buttonText} >Home</Text>
          </Button>
          <Button
            active={this.props.navigationState.index === 1}
            vertical
            onPress={() => this.props.navigation.navigate('SettingsScreen')}
          >
            <Icon style={styles.buttonText} name="md-settings" />
            <Text style={styles.buttonText}>Settings</Text>
          </Button>
          <Button
            active={this.props.navigationState.index === 2}
            vertical
            onPress={() => this.props.navigation.navigate('AboutScreen')}
          >
            <Icon style={styles.buttonText} name="md-information-circle" />
            <Text style={styles.buttonText}>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
