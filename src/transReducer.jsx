export const TransactionReducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            return [action.payload, ...state];
        }
        default:
            return state;
    }
};
