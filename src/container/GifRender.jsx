import React, {useState, useEffect, useRef} from 'react';
import PrintGif from './pure/printGif';

const GifRender = (props) => {
    const [topic, setTopic] = useState('dog');
    const [number, setNumber] = useState('1');
    const [gifs, setGifs] = useState([]);
    const inputRef = useRef(null);
    const numberRef = useRef(null);

    useEffect(() => {
        const APIurl = `https://api.giphy.com/v1/gifs/search?api_key=WT6uDyLqdyizb6RFxmYVAszweIgWYXIh&q=${topic}&limit=${number}&offset=0&rating=g&lang=en`
        fetch(APIurl)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        const gif = data.map(image => image.images.downsized_still.url)
        if(gif[0]){
            setGifs(gif)
        }else{
            window.alert('There is no GIF for your search. Try again.')
        }
        })
    }, [topic, number]);

    function Click(){
        console.log(inputRef.current.value)
        setTopic(inputRef.current.value)
        setNumber(numberRef.current.value)
    }
    
    return (
        <div className="App">
            <section className="App-content">
                <h1>Select a topic and quantity for a random GIF/s</h1>
                {
                    <PrintGif gifs = {gifs}></PrintGif>
                }
                <div>
                    Topic: <input ref={inputRef} type="text" className="text-zone"></input>
                </div>
                <div>
                    Number of Gifs: <input ref={numberRef} type="number" min={1} max={100} className="text-zone"></input>
                </div>
                <div>
                    <button onClick={Click} className="text-zone">Generate!</button>
                </div>
            </section>
        </div>
    );
}

export default GifRender;
