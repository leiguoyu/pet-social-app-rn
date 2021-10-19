import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect, DispatchProp} from 'react-redux';
import {increment, decrement, incrementAsync} from '../redux/actions';
import {redux_state} from '../types';

type Props = redux_state & DispatchProp;

class Counter extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  _increment = () => {
    this.props.dispatch(increment());
  };

  _decrement = () => {
    this.props.dispatch(decrement());
  };

  _incrementAsync = () => {
    this.props.dispatch(incrementAsync());
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._increment} title="+" />
        <Text>{this.props.value}</Text>
        <Button onPress={this._decrement} title="-" />
        <Button onPress={this._incrementAsync} title="Increment async" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = (state: any) => state.counter;

export default connect(mapStateToProps)(Counter);
