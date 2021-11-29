import React, {Component} from 'react';
import {FlatList, StyleSheet, Alert} from 'react-native';
import {
  Text,
  View,
  Button,
  Dialog,
  Colors,
  PanningProvider,
  Constants,
} from 'react-native-ui-lib';

export default class DialogScreen extends Component {
  constructor(props: any) {
    super(props);

    this.SCROLL_TYPE = {
      NONE: 'none',
      VERTICAL: 'vertical',
      HORIZONTAL: 'horizontal',
    };

    this.pannableTitle = {title: this.props.pannableTitle};
    this.title = this.props.title;
    this.supportedOrientations = ['portrait', 'landscape'];
    this.colors = [
      {value: Colors.red10, label: 'Red10'},
      {value: Colors.red30, label: 'Red30'},
      {value: Colors.red50, label: 'Red50'},
      {value: Colors.red70, label: 'Red70'},
      {value: Colors.blue10, label: 'Blue10'},
      {value: Colors.blue30, label: 'Blue30'},
      {value: Colors.blue50, label: 'Blue50'},
      {value: Colors.blue70, label: 'Blue70'},
      {value: Colors.purple10, label: 'Purple10'},
      {value: Colors.purple30, label: 'Purple30'},
      {value: Colors.purple50, label: 'Purple50'},
      {value: Colors.purple70, label: 'Purple70'},
      {value: Colors.green10, label: 'Green10'},
      {value: Colors.green30, label: 'Green30'},
      {value: Colors.green50, label: 'Green50'},
      {value: Colors.green70, label: 'Green70'},
      {value: Colors.yellow10, label: 'Yellow10'},
      {value: Colors.yellow30, label: 'Yellow30'},
      {value: Colors.yellow50, label: 'Yellow50'},
      {value: Colors.yellow70, label: 'Yellow70'},
    ];

    this.panDirection = PanningProvider.Directions.DOWN;
    this.position = 'center';
    this.scroll = this.SCROLL_TYPE.NONE;
    this.showHeader = this.props.showHeader || false;
    this.isRounded = true;
    this.ignoreBackgroundPress = this.props.ignoreBackgroundPress || false;
  }

  componentDidUpdate(prevProps) {}

  getWarning = () => {
    if (!this.showHeader && this.scroll !== this.SCROLL_TYPE.NONE) {
      return (
        <Text color={Colors.red30}>
          It is recommended to have pannable header with scrollable content
        </Text>
      );
    } else if (
      this.showHeader &&
      this.panDirection !== PanningProvider.Directions.DOWN
    ) {
      return (
        <Text color={Colors.red30}>
          It is recommended to have pannable header with direction=down
        </Text>
      );
    }
  };

  getMessage = () => {
    if (this.props.children) {
      return (
        <>
          {Array.isArray(this.props.children)
            ? this.props.children.map((item, index) => item)
            : this.props.children}
        </>
      );
    }
    return <Text>This is dialog content</Text>;
  };

  renderPannableHeader = props => {
    const {title} = props;
    return (
      <View>
        <View margin-20 center>
          <Text>{title}</Text>
        </View>
      </View>
    );
  };

  renderPlainContent = () => (
    <View style={styles.footer}>
      <Button backgroundRed label="确定" onPress={this.props.onConfirm} />
    </View>
  );

  keyExtractor = item => item.value;

  renderVerticalItem = ({item: color}) => (
    <Text text50 margin-20 color={color.value}>
      {color.label}
    </Text>
  );

  renderVerticalScroll = () => (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.verticalScroll}
      data={this.colors}
      renderItem={this.renderVerticalItem}
      keyExtractor={this.keyExtractor}
    />
  );

  renderHorizontalItem = ({item: color}) => (
    <View
      flex
      width={100}
      height={1000}
      style={{backgroundColor: color.value}}
    />
  );

  renderHorizontalScroll = () => (
    <View marginT-20 pointerEvents="box-none">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={this.colors}
        renderItem={this.renderHorizontalItem}
        keyExtractor={this.keyExtractor}
      />
      <View row pointerEvents="none" style={styles.horizontalTextContainer}>
        <Text>
          {'\u25c0'} Scroll me {'\u25b6'}
        </Text>
      </View>
    </View>
  );

  renderContent = () => {
    let content;

    switch (this.scroll) {
      case this.SCROLL_TYPE.VERTICAL:
        content = this.renderVerticalScroll();
        break;
      case this.SCROLL_TYPE.HORIZONTAL:
        content = this.renderHorizontalScroll();
        break;
      case this.SCROLL_TYPE.NONE:
      default:
        content = this.renderPlainContent();
        break;
    }

    const data = (
      <View spread flex={this.scroll !== this.SCROLL_TYPE.NONE}>
        <View marginT-20 marginH-20 center>
          {!this.showHeader && <Text text16>{this.title}</Text>}
          <View marginT-20={!this.showHeader}>{this.getMessage()}</View>
          {this.getWarning()}
        </View>
        {content}
      </View>
    );

    return data;
  };

  getDialogKey = height => `dialog-key-${this.position}-${height}`;

  renderDialog = () => {
    const renderPannableHeader = this.showHeader
      ? this.renderPannableHeader
      : undefined;
    const height = this.scroll !== this.SCROLL_TYPE.NONE ? '70%' : undefined;

    return (
      <Dialog
        useSafeArea={false}
        key={this.getDialogKey(height)}
        height={height}
        panDirection={this.panDirection}
        containerStyle={this.isRounded ? styles.roundedDialog : styles.dialog}
        visible={this.props.visible}
        onDismiss={this.props.onDismiss}
        renderPannableHeader={renderPannableHeader}
        pannableHeaderProps={this.pannableTitle}
        supportedOrientations={this.supportedOrientations}
        ignoreBackgroundPress={this.ignoreBackgroundPress}>
        {this.renderContent()}
      </Dialog>
    );
  };

  render() {
    return <>{this.renderDialog()}</>;
  }
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: Colors.white,
  },
  roundedDialog: {
    backgroundColor: Colors.white,
    marginBottom: Constants.isIphoneX ? 0 : 20,
    borderRadius: 12,
  },
  button: {},
  verticalScroll: {
    marginTop: 20,
  },
  horizontalTextContainer: {
    alignSelf: 'center',
    position: 'absolute',
    top: 10,
  },
  title: {
    color: '#1d1e2c',
    fontWeight: 'bold',
  },
  footer: {
    padding: 24,
  },
});
