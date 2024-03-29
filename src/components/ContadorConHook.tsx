import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const { valor, acumular } = useCounter();

    return(
        <>
            <h3>Contador Con Hook: <small>{ valor }</small></h3>

            <button 
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            >
                +1
            </button>
            &nbsp;
            <button className="btn btn-warning" onClick={() => acumular(-1)}>
                -1
            </button>
        </>
        )
}
