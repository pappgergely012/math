import React, { PureComponent } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedSubcatId } from '../store/actions/CurrentFormulaAction';

import Header from '../components/Header';
import PropTypes from 'prop-types';

class Subcatgories extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    const { categoryName, subcategories } = this.props;

    return (
      <View>
        <Header
          title={categoryName}
          back
          goBack={() => this.props.navigation.goBack()}
        />

        <ScrollView  
          contentContainerStyle={[styles.container]} 
        >
          <Text style={[styles.title]}>
            {this.getTitle(subcategories)}
          </Text>

          {this.renderSubcats(subcategories)}
        </ScrollView>
      </View>
    );
  }

  getTitle = (subcats) => {
    if(subcats.length > 0){
      return 'Mit szeretnél számolni?';
    }

    return 'Nincs egy alkategória se ebben a kategóriában!';
  }

  renderSubcats = (subcats) => {
    if(subcats.length > 0){
      return subcats.map((item, index) => {
        return (
          <TouchableOpacity 
            key={index}
            style={[styles.categoryContainer]}
            onPress={() => this.categorySelected(item.id)}>
            <Text style={[styles.categoryText]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )
      })
    }
  }

  categorySelected = subcatId => {
    this.props.onSetSelectedSubcat(subcatId);
    this.props.navigation.navigate('Math')
  }
}

const styles = {
  container: {
    minHeight: '100%',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingBottom: 20,
    color: '#333'
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
}

const mapStateToProps = state => ({
  categoryName: state.CurrentFormula.categoryName,
  subcategories: state.CurrentFormula.subcategories
})

const mapDispatchToProps = dispatch => ({
  onSetSelectedSubcat: (subcatId) => dispatch(setSelectedSubcatId(subcatId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Subcatgories);