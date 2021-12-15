import {
  Colors,
  Assets,
  Typography,
  Spacings,
  ThemeManager,
} from 'react-native-ui-lib';
import {p2d} from '~/js/utils/tools';

Colors.loadColors({
  primaryColor: '#fa4169',
  secondaryColor: '#3b5998',
  lightBlue: '#6266f9',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
  blackColor: '#1d1e2c',
  geryColor: '#69707f',
});

// 重置padingT和marginT
// for (var px_size = 1; px_size <= 200; px_size++) {
//   Typography.loadTypographies({
//     ['padding-' + px_size]: {padding: p2d(px_size)},
//     ['paddingL-' + px_size]: {paddingLeft: p2d(px_size)},
//     ['paddingT-' + px_size]: {paddingTop: p2d(px_size)},
//     ['paddingR-' + px_size]: {paddingRight: p2d(px_size)},
//     ['paddingB-' + px_size]: {paddingBottom: p2d(px_size)},
//     ['margin-' + px_size]: {margin: p2d(px_size)},
//     ['marginL-' + px_size]: {marginLeft: p2d(px_size)},
//     ['marginT-' + px_size]: {marginTop: p2d(px_size)},
//     ['marginR-' + px_size]: {marginRight: p2d(px_size)},
//     ['marginB-' + px_size]: {marginBottom: p2d(px_size)},
//   });
// }

Typography.loadTypographies({
  'font-12': {fontSize: p2d(12)},
  'font-14': {fontSize: p2d(14)},
  'font-16': {fontSize: p2d(16)},
  'font-18': {fontSize: p2d(18)},
  'font-20': {fontSize: p2d(20)},
  'font-22': {fontSize: p2d(22)},
  'font-24': {fontSize: p2d(24)},
  'font-26': {fontSize: p2d(26)},
  'font-28': {fontSize: p2d(28)},
  'font-30': {fontSize: p2d(30)},
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'},
  link: {color: '#6266f9'},
  fontBold: {fontWeight: 'bold'},
  greyFont: {color: '#69707f'},
  blackFont: {color: '#1d1e2c'},
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});

Assets.loadAssetsGroup('icons', {
  search: require('~/js/images/ic_search_24.png'),
  arrow: require('~/js/images/ic_arr.png'),
});

// with plain object
ThemeManager.setComponentTheme('Card', {
  borderRadius: 8,
  activeOpacity: 0.9,
});

// with a dynamic function
ThemeManager.setComponentTheme('Button', (props, context) => {
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  if (props.square) {
    return {
      borderRadius: 0,
    };
  }
  if (props.backgroundRed) {
    return {
      backgroundColor: Colors.primaryColor,
    };
  }
  if (props.backgroundBlue) {
    return {
      backgroundColor: Colors.secondaryColor,
    };
  }
  if (props.backgroundLightBlue) {
    return {
      backgroundColor: Colors.lightBlue,
    };
  }
});
