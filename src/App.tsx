//import { TiposBasicos } from "./typescript/TiposBasicos";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { Funciones } from "./typescript/Funciones";
//import { Contador } from "./components/Contador";
//import { ContadorConHook } from "./components/ContadorConHook";
import Login from "./components/Login";
import { Usuario } from "./components/Usuario";

const App = () => {
  return (
    <div className="mt-2">
        <h1>Introducción de Typescript con React</h1>
        <hr/>
        {/* <TiposBasicos> */}
        {/* <ObjetosLiterales> */}
        {/* <Funciones> */}
        {/*<Contador /> */}
        {/*<ContadorConHook />*/}
        {/*<Login/>*/}
        <Usuario />
    </div>
  )
}
export default App;