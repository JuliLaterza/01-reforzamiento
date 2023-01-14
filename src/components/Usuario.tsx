import { useUsuario } from '../hooks/useUsuario'
import { Usuario } from '../interfaces/reqRes' 

export const Usuarios = () => {
    
    const { usuarios, cargarUsuarios, paginaAnterior, paginaSiguiente } = useUsuario();

    const renderItem = (usuario: Usuario) => {
        return(
            <tr key={usuario.id.toString() }>
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
        <button className='btn btn-primary' onClick={ paginaSiguiente } >
                Siguientes
        </button>
        <button className='btn btn-danger' onClick={ paginaAnterior } >
                Atrás
        </button>
    </>
    )
}
