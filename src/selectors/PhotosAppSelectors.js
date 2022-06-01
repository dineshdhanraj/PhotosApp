function ListSelector(state) {
  return state.ListItem;
}

function ErrorSelector(state) {
  return state.Error;
}

function LoadingSelector(state) {
  return state.Loading;
}

function NewItemSelector(state) {
  return state.Item;
}

function VisibleSelector(state) {
  return state.Visible;
}

export {ListSelector, ErrorSelector, LoadingSelector, NewItemSelector,VisibleSelector};
