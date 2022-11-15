import React from 'react';

const PrintGif = (props) => {
    
    let count = 0;

    return (
        <div>
        {
            props.gifs.map(gif => 
                <div className='img.contain'>
                    <h3>Gif {count = count + 1}:</h3>
                    <img src={gif}/>
                </div>
                )
        }
        </div>
    );
}

export default PrintGif;
