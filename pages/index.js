import {useState} from 'react';
import Link from 'next/link';

function Home(){
    return <div>
        <link rel="stylesheet" href="../_css/estilo.css"/>

        <h1>FIP</h1>
        
        <Contador />
        
            <p></p>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
            <p></p>
            <div>
                <Link href="/api/tempo">
                <a>Tempo</a>
                </Link>
            </div>

        <footer id="rodape">
                <p> == página em desenvolvimento ==</p>
                <a href="http://www.fip.com.br" target="blank">fip.com.br</a>
        </footer>

        </div>
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home