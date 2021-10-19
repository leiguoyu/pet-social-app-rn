import {Colors, Typography, Spacings, ThemeManager} from 'react-native-ui-lib';

Colors.loadColors({
  primaryColor: '#fa4169',
  secondaryColor: '#3b5998',
  lightBlue: '#6266f9',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'},
  link: {color: '#6266f9'},
  fontBold: {fontWeight: 'bold'},
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
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
