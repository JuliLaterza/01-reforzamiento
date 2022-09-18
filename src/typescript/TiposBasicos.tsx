

export const TiposBasicos = () => {
    const nombre: string = 'Juli';
    const edad = 32;
    const poderes: string[] = ["Volar","invisibilidad"];
  return (
    <>
        <h1>{ nombre }, { edad } {poderes.join(', ') }</h1>
    </>
  )
}
