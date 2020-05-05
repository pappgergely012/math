import { SET_FORMULA, SET_SELECTEDSUBCAT } from '../actions/actionTypes';

const initialState = {
  categoryName: '',
  subcategories: [],
  selectedSubcategory: null
}

const CurrentFormulaReducer = (state = initialState, actions) => {
  switch(actions.type){
    case SET_FORMULA:
      return {
        ...state,
        categoryName: actions.name,
        subcategories: actions.subcategories,
      }
    case SET_SELECTEDSUBCAT:
      return {
        ...state,
        selectedSubcategory: actions.selectedSubcategory
      }
    default:
      return state;
  }
}

export default CurrentFormulaReducer;