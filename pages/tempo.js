import Link from 'next/link';

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toLocaleString();
    return (
        <div>
           <div>{dynamicDateString} (dinâmico)</div> 
           <div>{props.staticDateString} (estático)</div> 
           <div>
               <Link href="/">
                <a >voltar</a>
                </Link>
           </div>
        </div>        
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toLocaleString();
    return{
        //pega a hora atual e só atualiza após 10 segundos
        props: {
            staticDateString
        }, revalidate: 10
    }
}

export default Tempo;