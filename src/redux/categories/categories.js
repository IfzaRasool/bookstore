const initialState = [];
const CHK_STATUS = 'src/redux/categories/categoryStatus';

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export const categoryStatus = () => ({
  type: CHK_STATUS,
});

export default categoryReducer;
