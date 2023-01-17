import { useState } from "react";

export const useForm = (  ) => {
    const [state, setState] = useState({
        email: 'test@test.com',
        password: '123456'
    });

    const onChange = ( value: string, campo: string ) => {
        setState({
            ...state,
            [campo]: value
        })
    }

    return{ 
        ...state,
        state,
        onChange
    }
}

