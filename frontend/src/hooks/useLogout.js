// Gunakan di Side Bar nanti

import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // Remove from The Local Storage
        localStorage.removeItem('user')

        // Dispatch Logout Action
        dispatch({ type: 'LOGOUT' })

    }

    return { logout }
}