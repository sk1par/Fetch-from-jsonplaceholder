const setAuth= (isAuth: boolean) => {
    return {
        type: 'SET_AUTH',
        payload: isAuth
    }
}

export default setAuth;