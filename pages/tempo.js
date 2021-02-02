import Link from 'next/link';

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return (
        <div>
           <div>{dynamicDateString} (dinâmico)</div> 
           <div>{props.staticDateString} (estático)</div> 
        </div>        
    )
}

<Link href="/">
<a >Acessar página Home</a>
</Link>


export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    return{
        //pega a hora atual e só atualiza após 10 segundos
        props: {
            staticDateString
        }, revalidate: 10
    }
}

export default Tempo;