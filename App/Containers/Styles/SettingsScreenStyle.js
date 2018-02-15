import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../Themes/';

import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
    backgroundColor: colors.secondary,
  },
  form: {
    backgroundColor: colors.secondary,
    paddingBottom: Metrics.smallMargin,
  },
  formText: {
    color: 'white',
  },
  saveButton: {
    marginTop: Metrics.smallMargin,
    backgroundColor: colors.primary,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: Metrics.doubleBaseMargin,
  },
});
