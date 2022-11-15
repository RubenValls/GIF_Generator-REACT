export default function getGif(topic, number){
    const APIurl = `https://api.giphy.com/v1/gifs/search?api_key=WT6uDyLqdyizb6RFxmYVAszweIgWYXIh&q=${topic}&limit=${number}&offset=0&rating=g&lang=en`
        fetch(APIurl)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        return data.map(image => image.images.downsized_large.url)})
}