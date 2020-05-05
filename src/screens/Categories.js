import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { setCurrentFormula } from '../store/actions/CurrentFormulaAction';

import Header from '../components/Header';

class Categories extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      nameValue: '' 
    }
  }


  render() {
    return (
      <View>
        <Header
          title="Válassz alakzatot!"
        />

        <ScrollView contentContainerStyle={[styles.container]}>
          {this.getCategories()}
        </ScrollView>
      </View>
    );
  }

  getCategories = () => {
    return this.props.categories.map((item, index) => {
      return (
        <TouchableOpacity 
          key={index}
          style={[styles.categoryContainer]}
          onPress={() => this.categoryPressed(item.categoryName, item.subcategories)}>
          <Text style={[styles.categoryText]}>
            {item.categoryName}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  categoryPressed = (name, subcats) => {
    this.props.navigation.navigate('Subcategories');
    this.props.onSetCurrentFormula(name, subcats);
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingTop: 40,
  },
  categoryContainer: {
    width: '100%',
    borderBottomWidth: 2,
    padding: 30,
    borderColor: '#339cdd',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  categoryText: {
    fontSize: 16
  }
})

const mapStateToProps = (state) => ({
  categories: state.Categories
});

const mapStateDispatchToProps = (dispatch) => ({
  onSetCurrentFormula: (name, subcats) => dispatch(setCurrentFormula(name, subcats)),
})

export default connect(mapStateToProps, mapStateDispatchToProps)(Categories);