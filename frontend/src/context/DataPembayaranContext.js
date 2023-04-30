import { createContext, useReducer } from "react";

export const DataPembayaranContext = createContext();

export const dataPembayaranReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATAPEMBAYARAN':
            return {
                dataPembayaran: action.payload
            }
        default:
            return state
    }
}

export const DataPembayaranContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataPembayaranReducer, {
        dataPembayaran: null
    })

    return (
        <DataPembayaranContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DataPembayaranContext.Provider>
    )
}

