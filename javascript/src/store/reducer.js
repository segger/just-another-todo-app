import { combineReducers } from 'redux';

const INTIAL_ITEMS = {
    items: [{'key':'sleep'}]
};

const todoReducer = (state = INTIAL_ITEMS, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    todo: todoReducer,
});
