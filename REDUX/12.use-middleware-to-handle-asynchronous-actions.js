const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

// actions
const requestingData = () => {return {type: REQUESTING_DATA}}
const receivedData = (data) => {return {type: RECEIVED_DATA, users: data.users}}

//  to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument. Within this function, you can dispatch actions and perform asynchronous requests.

// action-creator
const handleAsync = () => {
    return function (dispatch) {
        // Dispatch request action here
        store.dispatch(requestingData());
        setTimeout(function () {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            }
            store.dispatch(receivedData(data));
            // Dispatch received data action here
        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: []
};

// reducer
const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
        default:
            return state;
    }
};

// asynchronous store
const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);



