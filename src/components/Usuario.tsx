import React, { useEffect, useState} from 'react'
import { reqRestapi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes' 

export const Usuarios = () => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([])


    useEffect(() => {
        reqRestapi.get<ReqResListado>('/users')
        .then(resp => {
            setUsuarios( resp.data.data ) //Esto lo puedo hacer porque setUusiarios espera un tipo de dato de usuario. DATA es tipo de USUARIO
        })
        .catch(console.log)
    }, [])

    
    const renderItem = (usuario: Usuario) => {
        return(
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                    src={usuario.avatar}
                    alt={ usuario.last_name }
                    style={{
                        width:50,
                        borderRadius:100
                    }}
                    />
                </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>

            </tr>
        )
    }

    return (
    <>
        <h2>Usuarios</h2>

        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <body>
                {
                    usuarios.map(renderItem)
                }
            </body>
        </table>
        <button className='btn btn-primary' >
                Siguientes
        </button>
    </>
    )
}
