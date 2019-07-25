export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const add_item = item => {
  console.log(item);
  return {
    type: ADD_ITEM,
    payload: item
  };
};
