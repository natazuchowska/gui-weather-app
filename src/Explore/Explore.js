import React from 'react';
// import "./crops_api"

function Explore({data}) {

    
    const reqTemp = Math.round(data.main.temp);
    // const fetch = require('node-fetch');
    let key = "WxuPjSIF7_FiPCJWqCdu7pAJxI9wvJPbU5KLMVCrY7M";
    let url = `https://trefle.io/api/v1/plants?token=${key}`


    function getData() {
        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }


}
export default Explore;