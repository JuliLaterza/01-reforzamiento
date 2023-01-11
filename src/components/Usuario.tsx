import React, { useEffect } from 'react'
import { reqRestapi } from '../api/reqRes'


export const Usuario = () => {

    useEffect(() => {
        reqRestapi.get('/users')
        .then(resp => {
            console.log(resp.data.data)
        })
        .catch(console.log)
    }, [])

    return (
    <>
        <h2>Usuarios</h2>

        <table className='table'>
            <thead>
                <tr>
                    <th>gancagabi</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
        </table>
    </>
    )
}
