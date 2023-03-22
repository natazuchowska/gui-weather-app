import React from 'react';

function Explore({data}){
    return(
        <div>
            This is the Explore page!
            <p>{Math.round(data.main.temp)}°C</p>
        </div>
    )

}
export default Explore;