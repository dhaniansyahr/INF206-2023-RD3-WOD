import { DatasContext } from "../context/DataContext";
import { useContext } from "react";

export const useDatasContext = () => {
    const context = useContext(DatasContext)

    if (!context) {
        throw Error('useDatasContext must be used inside an DatasContextProvider')
    }

    return context
}