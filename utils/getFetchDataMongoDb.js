

export async function getFetchDataMongoDb(urlApi,setCarouselDesktop) {

    const request = await fetch(urlApi)
    const data = await request.json()
    return data
}