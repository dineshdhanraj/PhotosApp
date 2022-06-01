import * as Actions from "../constants/PhotosAppConstants"

export const ListAction = (ListData) => {
  return async (dispatch) => {
    dispatch({type: Actions.ListDetails, payload: ListData});
  };
};

export const ErrorAction = (ErrorData) => {
  return async (dispatch) => {
    dispatch({type: Actions.ErrorDetails, payload: ErrorData});
  };
};

export const LoadingAction = (LoadData) => {
  return async (dispatch) => {
    dispatch({type: Actions.LoadingDetails, payload: LoadData});
  };
};

export const VisibleAction = (VisibleData) => {
  return async (dispatch) => {
    dispatch({type: Actions.VisibleDetails, payload: VisibleData});
  };
};

export const ItemAction = (PageData) => {
  return async (dispatch) => {
    dispatch({type: Actions.NewItemDetails, payload: PageData});
  };
};