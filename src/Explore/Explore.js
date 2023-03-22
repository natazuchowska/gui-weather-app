import React from 'react';
import "./crops_api"
function Explore({data}) {
    return (
        <div>
            This is the Explore page!
            <p>{Math.round(data.main.temp)}°C</p>
        </div>
    )

}
export default Explore;