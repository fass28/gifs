const apiKey = 'kGWK4uDnUS39Lqe2FPFN6cEmLFTPLJWY'

export const getGifts =async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map(img => {
        const newMappedGifs = {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
        return newMappedGifs
    })
    return gifs
}
