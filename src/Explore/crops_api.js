const apiUrl = 'https://trefle.io/api/v1/plants';
const apiKey = 'YOUR_API_KEY'; 
const temperatureMinimum = 25; 
const precipitationMaximum = 50; 

const plantListContainer = document.getElementById('plant-list');

fetch(`${apiUrl}?filter[temperature_minimum]=${temperatureMinimum}&filter[precipitation_maximum]=${precipitationMaximum}&token=${apiKey}`)
    .then(response => response.json()) 
    .then(data => {
        const plantHtml = data.data.map(plant => `
      <div class="plant">
        <h2>${plant.common_name}</h2>
        <p>Scientific name: ${plant.scientific_name}</p>
        <p>Family: ${plant.family_common_name}</p>
        <p>Native status: ${plant.native_status}</p>
      </div>
    `).join('');
        plantListContainer.innerHTML = plantHtml;
    })
    .catch(error => console.error(error));
