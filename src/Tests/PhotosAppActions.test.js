import {
  ListAction,
  ErrorAction,
  LoadingAction,
  ItemAction,
  VisibleAction
} from '../actions/PhotosAppActions';

const mockDispatch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

it('Testing for ListAction', async () => {
  await ListAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});

it('Testing for ErrorAction', async () => {
  await ErrorAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});

it('Testing for LoadingAction', async () => {
  await LoadingAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});
it('Testing for VisibleAction', async () => {
  await VisibleAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});

it('Testing for New Item Action', async () => {
  await ItemAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});
