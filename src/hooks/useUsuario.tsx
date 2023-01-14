import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { useRef, useState, useEffect } from 'react';
import { reqRestapi } from "../api/reqRes";

export const useUsuario = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1);

    useEffect(() => {
        //Llamado al API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {

        const resp = await reqRestapi.get<ReqResListado>('/users',{ 
            params: {
                page: paginaRef.current
            }
         })
        console.log(paginaRef.current)
        if (resp.data.data.length > 0) {
            setUsuarios( resp.data.data );
        }else {
            paginaRef.current --;
            alert('No hay más registros.')
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1){
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        cargarUsuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
