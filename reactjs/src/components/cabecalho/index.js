
import Cookies from 'js-cookie'
import { Barra, ContainerCabecalho } from './styled'
import { useHistory } from 'react-router-dom'


export default function Cabecalho() {


    const navig = useHistory();
    const logoff = () => {
        Cookies.remove('usuario-logado');
        navig.push('/');
    }

    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <button onClick={logoff}> Sair </button>
        </ContainerCabecalho>
    )
}
