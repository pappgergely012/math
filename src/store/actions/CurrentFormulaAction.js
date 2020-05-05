import { SET_FORMULA, SET_SELECTEDSUBCAT } from "./actionTypes"

export const setCurrentFormula = (name, subcats) => {
  return dispatch => {
    if(name, subcats){
      dispatch(addCurrentFormula(name, subcats));

      return;
    } 

    throw new Error('Variable name or subcats is not defined!');
  }
}

export const setSelectedSubcatId = (subcategoryId) => {
  return dispatch => {
    if(subcategoryId){
      dispatch(addSelectedSubcat(subcategoryId));

      return;
    }

    throw new Error('Variable subcategoryId is not defined!')
  }
}

const addSelectedSubcat = (selectedSubcategory) => {
  return {
    type: SET_SELECTEDSUBCAT,
    selectedSubcategory
  }
}

const addCurrentFormula = (name, subcats) => {
  return {
    type: SET_FORMULA,
    name: name,
    subcategories: subcats
  }
}
