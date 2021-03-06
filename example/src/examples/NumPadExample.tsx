import React, { Component } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { NumPad } from 'supergroww';

// import { Fonts, getColors } from '../styles';

interface NumPadExampleState {
  input: string;
}
interface NumPadExampleProps {
  isDark: boolean;
}
class NumPadExample extends Component<NumPadExampleProps, NumPadExampleState> {
  constructor(props: NumPadExampleProps) {
    super(props);
    this.state = { input: '' };
  }

  // onItemClick
  onItemClick = (value: string) => {
    const { input } = this.state;
    if (input.length < 10) {
      this.setState({ input: input + value });
    }
  };

  onDeleteItem = () => {
    const { input } = this.state;
    this.setState({ input: input.substring(0, input.length - 1) });
  };

  render() {
    const { input } = this.state;
    const { isDark } = this.props;
    // const Colors = getColors(isDark);
    return (
      <View>
        <Text style={[]}>{input}</Text>
        <NumPad
          onItemClick={this.onItemClick}
          onDeleteItem={this.onDeleteItem}
          isDark={isDark}
        />
      </View>
    );
  }
}

export default NumPadExample;
