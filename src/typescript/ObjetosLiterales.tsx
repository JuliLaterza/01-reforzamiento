interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    provincia: string;
}



export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Julian',
        edad: 23,
        direccion: {
            pais: 'Argentina',
            provincia: 'Buenos Aires'
        }
    }
  return (
    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>
                {JSON.stringify( persona, null, 3) }
            </pre>
        </code>
    </>
  )
}
