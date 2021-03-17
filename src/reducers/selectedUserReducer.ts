const selectedUser = (state = {}, action: any) => {
    switch (action.type) {
        case 'SELECTED_USER':
            return  action.payload
        default:
            return state;       
    }
};

export default selectedUser;