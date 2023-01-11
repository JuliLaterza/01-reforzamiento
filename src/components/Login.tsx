import { useEffect, useReducer, useState } from 'react';


interface AuthState {
    validando: boolean;
    token: string | null;
    nombre: string;
    username: string;
}


const initialState: AuthState = {
    validando: true,
    token: null,
    nombre: 'Juli',
    username: '',
}

type AuthAction = { type: 'logout' } | { type: 'login', payload: { nombre: string, username: string } };

const authReducer = (state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: '',
            }
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username,
            }
        default:
            return state;
    }
}

export default function Login() {

    const [{ validando, token, nombre, username }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Juli',
                username: 'julian',
            }
        });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando... {nombre}
                </div>
            </>
        )
    }
        return (
            <>
                <h3>Login</h3>
                {
                    (token)
                        ? <div className="alert alert-success"> Autenticado. </div>
                        : <div className="alert alert-danger"> No autenticado. </div>
                }

                {
                    (token)
                        ? <button className='btn btn-danger' onClick={ logout } >Log Out</button>
                        : <button className='btn btn-primary' onClick={ login } >Log In</button>
                }
                
                
            </>
        )
    

    return (
        
        

        <>
            <button
                className="btn btn-primary"
            >
                Login
            </button>
            <button
                className="btn btn-danger"
            >
                Log Out
            </button>
        </>
    )
}
