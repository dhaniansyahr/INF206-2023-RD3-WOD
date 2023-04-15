import { createContext, useReducer } from "react";

export const HelpDataContext = createContext();

export const helpDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_HELPDATA':
            return {
                helpData: action.payload
            }
        default:
            return state
    }
}

export const HelpDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(helpDataReducer, {
        helpData: null
    })

    return (
        <HelpDataContext.Provider value={{ ...state, dispatch }}>
            {children}
        </HelpDataContext.Provider>
    )
}
