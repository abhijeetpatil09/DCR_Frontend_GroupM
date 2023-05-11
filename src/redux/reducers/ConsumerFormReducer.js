import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    RequestId: '',
    TableData: {},
};

const reducer = (state = initialState, action) => {
   
    switch (action.type) {
        case actionType.CONSUMER_FORM_TABLE_DATA:
            return updateObject(state, action.payload);

        default:
            return state;
    }
};

export default reducer;