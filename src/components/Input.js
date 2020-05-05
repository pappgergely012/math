import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string
  }

  constructor(props){
    super(props);

    this.state = {
      focused: false
    }
  }

  render() {
    const { focused } = this.state;
    const { value, placeholder, containerStyle, keyboardType } = this.props;

    const placeholderPos = focused || value.length > 0 ? styles.focusedPlaceholder : null

    return (
      <TouchableOpacity 
        style={[styles.inputContainer, containerStyle, focused ? styles.focusedInput : null]} 
        onPress={() => this.focusInput()}
      >
        <TextInput
          style={[styles.input]}
          onFocus={() => this.inputFocused()}
          ref={(input) => this.input = input}
          value={value}
          onChangeText={this.props.onChangeText}
          onBlur={() => this.onBlur()}
          keyboardType={keyboardType}
        />

        <Text style={[styles.placeholder, placeholderPos]}>{placeholder}</Text>

        {this.renderMeasure()}
      </TouchableOpacity>
    );
  }

  renderMeasure = () => {
    if(this.props.measure && this.props.mesaure !== ''){
      return (
        <Text style={[styles.measure]}>{this.props.measure}</Text>
      )
    }
  }

  onBlur = () => {
    this.setFocused(false);

  }

  inputFocused = () => {
    this.setFocused(true);
  }

  focusInput = () => {
    this.setFocused(true);
    this.input.focus();
  }

  setFocused = (focused) => {
    this.setState(prevState => ({
      ...prevState,
      focused
    }))
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
  },
  focusedInput: {
    borderColor: '#339cdd'
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
  placeholder: {
    color: '#999',
    fontSize: 14,
    position: 'absolute',
    paddingHorizontal: 10
  },
  focusedPlaceholder: {
    color: '#339cdd',
    top: 1,
    fontSize: 8
  },
  measure: {
    color: '#999',
    fontSize: 14,
    position: 'absolute',
    paddingHorizontal: 10,
    right: 0
  }
})

export default Input;