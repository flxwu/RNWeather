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
    alignItems: 'center',
    marginTop: 2 * Metrics.section,
  },
  weatherDisplayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
});
