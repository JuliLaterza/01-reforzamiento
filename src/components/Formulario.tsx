import { useState } from "react"
import { useForm } from "../hooks/useForm"


export const Formularios = () => {

    const { state,email,password, onChange } = useForm()

    return (
        <>
            <h3>Formlarios</h3>
            <input type="text"
            className="form-control"
            placeholder="Email / User"
            value = { email }
            onChange= { ({ target }) => onChange( target.value ,'email') }
            />

            <input
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="Password"
            value = { password }
            onChange= { ({ target }) => onChange( target.value ,'password') }
            />

            <code>
                <pre>{ JSON.stringify(state,null,2) }</pre>
            </code>
        </>
    )
}