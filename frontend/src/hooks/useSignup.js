import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signUp = async (nama, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nama, email, password, role: 'user' })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // Update the Auth Context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }

    return { signUp, error, isLoading };
}

export const useSignupDriver = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signUpDriver = async (nama, email, password, no_hp, alamat, role, tempat_lahir, tanggal_lahir, tempatKerja, harga, KTP, SIM, STNK, SKCK) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup-driver', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nama, email, password, no_hp, alamat, role, tempat_lahir, tanggal_lahir, tempatKerja, harga, KTP, SIM, STNK, SKCK })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // Update the Auth Context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }

    return { signUpDriver, error, isLoading };
}
