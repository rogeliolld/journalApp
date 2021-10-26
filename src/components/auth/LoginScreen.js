import React from 'react'

export default function LoginScreen() {
    return (
        <>
            <h3>LoginScreen</h3>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <button
                    type="submit"
                >
                    Login
                </button>
                <hr/>
                Google
            </form>
        </>
    )
}
