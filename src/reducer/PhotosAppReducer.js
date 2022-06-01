import * as Actions from '../constants/PhotosAppConstants';

const initialDetails = {
  ListItem: [],
  Error: '',
  Loading:false,
  Item:"",
  Visible:true,
};

export default function PhotosAppReducer(state = initialDetails, action) {
  switch (action.type) {
    case Actions.ListDetails:
      return {...state, ListItem: action.payload.concat(state.ListItem)};
    case Actions.ErrorDetails:
      return {...state, Error: action.payload};
    case Actions.NewItemDetails:
      return {...state, Item: action.payload};
    case Actions.LoadingDetails:
        return {...state, Loading: action.payload}; 
    case Actions.VisibleDetails:
          return {...state, Visible: action.payload};    
    default:
      return state;
  }
}
