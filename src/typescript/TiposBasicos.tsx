

export const TiposBasicos = () => {
    const nombre: string = 'Juli';
    const edad = 32;
    const poderes = ["volar","invisibilidad"];
  return (
    <>
        { nombre }, { edad } {poderes.join(', ') }
    </>
  )
}
