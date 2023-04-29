import { createContext, useReducer } from "react";

export const DataPemesananContext = createContext();

export const dataPemesanantaReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATAPEMESANAN':
            return {
                dataPemesanan: action.payload
            }
        default:
            return state
    }
}

export const DataPemesananContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataPemesanantaReducer, {
        dataPemesanan: null
    })

    return (
        <DataPemesananContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DataPemesananContext.Provider>
    )
}
