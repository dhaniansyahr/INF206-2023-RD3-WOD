import { DataPemesananContext } from "../context/DataPemesananContext";
import { useContext } from "react";

export const useDataPemesanan = () => {
    const context = useContext(DataPemesananContext)

    if (!context) {
        throw Error('useDataPemesanan must be used inside an HelpDataContextProvider')
    }

    return context
}