import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux'
import { calculate } from '../common/Calculator';

import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';

class Math extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      height: '',
      width: '',
      length: '',
      diameter: '',
      A: '',
      B: '',
      C: '',
      calculated: '',
      measure: 'm'
    }

    this.subcat = null;
  }

  render() {
    const { categoryName, subcategories} = this.props;

    subcategories.map(subcat => {
      if(subcat.id === this.props.selectedSubcat){
        this.subcat = subcat;
      }
    });

    return (
      <View style={[styles.container]}>
        <Header
          title={categoryName}
          back
          goBack={() => this.props.navigation.goBack()}
        />
        <View style={[styles.container]}>
          <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == 'ios' ? 'padding' : null} >
            <ScrollView 
              style={[Platform.OS === 'ios' ? {marginBottom: 40} : null]}
              contentContainerStyle={{paddingBottom: 20}}
              bounces={false}
              overScrollMode="never"
              keyboardShouldPersistTaps="always"
            >
              <View style={[styles.textContainer]}>
                <Text style={[styles.title]}>
                  {this.subcat.name} kiszámolása
                </Text>

                <Text style={[styles.text]}>
                  {this.subcat.description}
                </Text>
              </View>

              {this.getInputs()}

              {this.renderCalculatedNubmer()}

              <Button
                title="Számolás"
                onPress={() => this.buttonPressed()}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }

  getInputs = () => {  
    if(this.subcat !== null){
      return this.subcat.dimensions.map((dimension, index) => {
        const slug = this.getSlug(dimension);

        return (
          <Input
            key={index}
            value={this.state[dimension]}
            onChangeText={(val) => this.onChangeText(dimension, val)}
            placeholder={slug}
            measure={this.state.measure}
            containerStyle={{marginVertical: 10}}
            keyboardType='numeric'
          /> 
        )
      })
    }
  }

  getSlug = (dimension) => {
    let slug = null;

    switch(dimension){
      case 'width':
          slug = 'Szélesség';
        break;
      case 'height':
          slug = 'Magasság';
        break;
      case 'length':
          slug = 'Hosszúság';
        break;
      case 'A':
          slug = 'A';
        break;
      case 'B':
          slug = 'B';
        break;
      case 'C':
          slug = 'C';
        break;
      case 'diameter':
          slug = 'Átmérő';
        break;
    }

    return slug;
  }

  renderCalculatedNubmer = () => {
    if(this.state.calculated === '') return

    const { calculated, measure } = this.state;

    return (
      <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>
          Az eredmény
        </Text>
        <Text style={{fontSize: 14}}>
          A(z) {this.subcat.name} - {calculated} {this.subcat.measure === null ? measure : this.subcat.measure}
        </Text>
      </View>
    )
  }

  onChangeText = (type, val) => {
    this.setState(prevState => ({
      ...prevState,
      [type]: val
    }))
  }

  buttonPressed = () => {
    const { height, width, length, diameter, A, B, C } = this.state;

    const resp = calculate(this.subcat.id, height, width, length, diameter, A, B, C );

    if(resp === null){
      Alert.alert('Hiba történt!', 'Hiba törént a számolás során kérlek ellenőrizd, hogy minden érték ki van e töltve!')

      return;
    }

    this.setState(prevState => ({
      ...prevState,
      calculated: resp.toFixed(2)
    }))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginVertical: 20,
    paddingHorizontal: 10
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 30
  },
  text: {
    color: '#666',
    fontSize: 16,
    lineHeight: 24
  }
})

const mapStateToProps = state => ({
  categoryName: state.CurrentFormula.categoryName,
  subcategories: state.CurrentFormula.subcategories,
  selectedSubcat: state.CurrentFormula.selectedSubcategory
})

export default connect(mapStateToProps, null)(Math);