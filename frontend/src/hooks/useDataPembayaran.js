import { DataPembayaranContext } from "../context/DataPembayaranContext";
import { useContext } from "react";

export const useDataPembayaran = () => {
    const context = useContext(DataPembayaranContext)

    if (!context) {
        throw Error('useDataPembayaran must be used inside an HelpDataContextProvider')
    }

    return context
}