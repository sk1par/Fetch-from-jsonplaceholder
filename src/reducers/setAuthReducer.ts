const setAuthReducer = (state = false, action: any) => {
    switch (action.type) {
        case 'SET_AUTH':
            return  action.payload
        default:
            return state;       
    }
};

export default setAuthReducer;