import {useState} from 'react';
import Link from 'next/link';

function Home(){
    return <div>
        <h3>Home 3</h3>
        <Contador />
        <div>Teste</div>

            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
            
            <div>
                <Link href="/tempo">
                <a>Acessar página Tempo</a>
                </Link>
            </div>
            
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