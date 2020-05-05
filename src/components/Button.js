import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    buttonStyle: PropTypes.object
  }

  render() {
    const { buttonStyle, titleStyle, title } = this.props;
    
    return (
      <TouchableOpacity 
        style={[styles.button, buttonStyle]} 
        onPress={this.props.onPress}
      >
        <Text style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 36,
    backgroundColor: '#339cdd',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Button;