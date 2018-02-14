import React from 'react';
import { TabNavigator } from 'react-navigation';
import AboutScreen from '../Containers/AboutScreen';
import SettingsScreen from '../Containers/SettingsScreen';
import HomeScreen from '../Containers/HomeScreen';

import styles from './Styles/NavigationStyles';
import MainTabsFooter from '../Components/MainTabsFooter';

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  HomeScreen: { screen: HomeScreen },
  SettingsScreen: { screen: SettingsScreen },
  AboutScreen: { screen: AboutScreen },
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: props => <MainTabsFooter {...props} />,
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
