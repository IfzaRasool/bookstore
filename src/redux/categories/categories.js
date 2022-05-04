const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Status':
      return 'under construction';
    default:
      return state;
  }
};

export const categoryStatus = () => ({
  type: 'Status',
});

export default categoryReducer;
