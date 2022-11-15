import React, {useState, useEffect, useRef} from 'react';
import PrintGif from './pure/printGif';
import Title from './pure/title';

const GifRender = (props) => {
    const [topic, setTopic] = useState('dog');
    const [number, setNumber] = useState('1');
    const [gifs, setGifs] = useState([]);
    const inputRef = useRef(null);
    const numberRef = useRef(null);

    useEffect(() => {
        const APIurl = `https://api.giphy.com/v1/gifs/search?api_key=WT6uDyLqdyizb6RFxmYVAszweIgWYXIh&q=${topic}&limit=${number}&offset=0&rating=r&lang=en`
        fetch(APIurl)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        const gif = data.map(image => image.images.downsized.url)
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
        <div className="App container">
            <section className="App-content">
                <Title/>
                {
                    <PrintGif gifs = {gifs}></PrintGif>
                }
                <div className='row mt-2'>
                    <h4 className='d-flex'>Topic:</h4>
                    <input ref={inputRef} type="text" className="text-zone form-control"></input>
                </div>
                <div className='row'>
                    <h4 className='d-flex'>Number of Gifs:</h4> 
                    <input ref={numberRef} type="number" min={1} max={100} className="text-zone form-control"></input>
                </div>
                <div>
                    <button type="button" onClick={Click} className="btn btn-outline-light btn-lg mt-2 mb-2">Generate!</button>
                </div>
            </section>
        </div>
    );
}

export default GifRender;
