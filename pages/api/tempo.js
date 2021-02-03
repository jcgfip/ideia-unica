function tempo(request, response){
    const dynamicDate = new Date();

    /* responsável por dar menos requisições na vercel */
    response.setHeader('Cache-Control', 's-maxage=10, state-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;