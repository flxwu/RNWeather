import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes/';

import Metrics from '../../Themes/Metrics';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  body: {
    backgroundColor: Colors.primary,
  },
  header: {
    backgroundColor: Colors.secondary,
  },
  weatherView: {
    padding: Metrics.doubleBaseMargin,
    paddingLeft: 2 * Metrics.doubleBaseMargin,
  },
  weatherDisplayText: {
    color: 'white',
    fontWeight: 'bold',
    padding: Metrics.marginVertical,
  },
  weatherCityText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  weatherStateText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  stateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  tempDisplayText: {
    color: 'white',
    fontSize: 34,
    padding: Metrics.doubleBaseMargin,
    textAlign: 'center',
  },
  list: {
    backgroundColor: Colors.secondary,
    height: 40,
  },
  listCats: {
    fontWeight: 'bold',
    color: 'white',
  },
});
