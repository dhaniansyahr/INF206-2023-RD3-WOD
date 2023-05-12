import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save to Local Storage
            localStorage.setItem('user', JSON.stringify(json))
            // Update the Auth Context
            dispatch({ type: 'LOGIN', payload: json })

            if (json.role === 'user') {
                window.location.href = '/pemesanan'
            } else if (json.role === 'admin') {
                window.location.href = '/dashboard'
            } else if (json.role === 'driver') {
                window.location.href = '/pemesanan-driver'
            }

            setIsLoading(false)
        }
    }

    return { login, error, isLoading };
}