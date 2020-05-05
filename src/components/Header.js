import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    back: PropTypes.bool
  }

  render() {
    return (
      <View style={[styles.container]}>
        <SafeAreaView 
          style={[styles.innerContainer]} 
          forceInset={{top: 'always', bottom: 'never'}}
        >
          {this.getBackIcon()}
          
          <Text 
            style={[styles.title]}
            numberOfLines={1}
          >
            {this.props.title}
          </Text>
        </SafeAreaView>
      </View>
    );
  }

  getBackIcon = () => {
    if(this.props.back){
      return (
        <TouchableOpacity 
          onPress={() => this.props.goBack()}
          style={[styles.back]}
        >
          <FontAwesomeIcon
            size={22}
            color="#fff"
            icon={faArrowLeft}
          />
        </TouchableOpacity>
      )
    }
  }
}

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#339cdd'
  },
  innerContainer: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 12,
  },
  back: {
    position: 'absolute',
    left: 0,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
    bottom: 0,
  },
}

export default Header;