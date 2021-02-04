import {useState} from 'react';
import Link from 'next/link';

function Home(){
    return <body>
    <div>
        <Logotipo />
        <p></p>
        <Contador />
            <p></p>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
            <p></p>
            <div>
                <Link href="/tempo">
                <a>Tempo</a>
                </Link>
            </div>

        </div>

        <footer>
            <p> Em desenvolvimento ~ by JC</p>
            <a href="http://www.fip.com.br" target="blank">fip.com.br</a>
        </footer>

    </body>
}

function Contador(){
    const [contador, setContador] = useState(1);
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

function Logotipo(){
return(
    <div>
        <img src='./_images/fip.png' alt=' fip' width='100' height='100'></img>
    </div>
    )
}

export default Home