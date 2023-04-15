import { HelpDataContext } from "../context/HelpDataContext";
import { useContext } from "react";

export const useHelpDataContext = () => {
    const context = useContext(HelpDataContext)

    if (!context) {
        throw Error('useHelpDataContext must be used inside an HelpDataContextProvider')
    }

    return context
}