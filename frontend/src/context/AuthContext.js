import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        case 'UPDATE_USER':
            return {
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    const updateUser = (userData) => {
        dispatch({ type: 'UPDATE_USER', payload: userData });
    };

    console.log('Auth Context state', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}