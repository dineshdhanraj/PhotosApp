import {
  ListSelector,
  ErrorSelector,
 LoadingSelector,
  NewItemSelector,
  VisibleSelector
} from '../selectors/PhotosAppSelectors';

const DummyData = {
  ListItem: [{Title: 'Hyd'}],
  Loading:true,
  Error: 'Rejected',
  Item: [{"Title": "Hyderabad"}],
  Visible:true,
};

it('Testing Error Data Case', () => {
  const result = ErrorSelector(DummyData);
  expect(result).toEqual('Rejected');
});

it('Testing Listing functionality', () => {
  const result = ListSelector(DummyData);
  expect(result[0].Title).toEqual('Hyd');
});

it('Testing New Item functionality', () => {
  const result = NewItemSelector(DummyData);
  expect(result[0].Title).toEqual('Hyderabad');
});

it('Testing Loading Details functionality', () => {
  const result = LoadingSelector(DummyData);
  expect(result).toEqual(true);
});

it('Testing PageNumber Details functionality', () => {
  const result = VisibleSelector(DummyData);
  expect(result).toEqual(true);
});
