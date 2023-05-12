import { DataPemprosesanContext } from "../context/DataPemprosesan";
import { useContext } from "react";

export const useDataPemprosesan = () => {
    const context = useContext(DataPemprosesanContext)

    if (!context) {
        throw Error('useDataPemprosesan must be used inside an HelpDataContextProvider')
    }

    return context
}