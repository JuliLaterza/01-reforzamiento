import { useReducer } from 'react';


interface AuthState {
    validando: boolean;
    token: string | null;
    nombre: string;
    username: string;
}


const initialState: AuthState = {
    validando: true,
    token: null,
    nombre: '',
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
  return (
    
    const [state, dispatch] = useReducer(authReducer, initialState);
    

    <>
        <h3>Login</h3>
        
        <div className="alert alert-info">
            Validando...
        </div>
        <div className="alert alert-danger">
            No Autenticado.
        </div>
        <div className="alert alert-success">
            Autenticado.
        </div>

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
