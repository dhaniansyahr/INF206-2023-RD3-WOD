import { createContext, useReducer } from "react";

export const DataPemprosesanContext = createContext();

export const dataPemprosesanReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATAPEMPROSESAN':
            return {
                dataPemprosesan: action.payload
            }
        case 'CREATE_DATAPEMPROSESAN':
            return {
                dataPemprosesan: [action.payload, ...state.dataPemprosesan]
            }
        case 'UPDATE_DATAPEMPROSESAN':
            return {
                dataPemprosesan: { ...state.dataPemprosesan, ...action.payload }
            }
        default:
            return state
    }
}

export const DataPemprosesanContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataPemprosesanReducer, {
        dataPemprosesan: null
    })

    const updatePemprosesan = (dataPemprosesanData) => {
        dispatch({ type: 'UPDATE_DATAPEMPROSESAN', payload: dataPemprosesanData });
    };

    return (
        <DataPemprosesanContext.Provider value={{ ...state, dispatch, updatePemprosesan }}>
            {children}
        </DataPemprosesanContext.Provider>
    )
}
