import React from 'react';

const PrintGif = (props) => {
    
    let count = 0;

    return (
        <div>
        {
            props.gifs.map(gif => 
                <div>
                    <h5>Gif {count = count + 1}:</h5>
                    <img src={gif} alt='gif' width='100%'/>
                </div>
                )
        }
        </div>
    );
}

export default PrintGif;
