const cropsApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dae2290614mshd291408df134e51p1c0cb2jsnb54579c9ffc2',
        'X-RapidAPI-Host': 'trefle.p.rapidapi.com'
    }
};

fetch('https://trefle.p.rapidapi.com/api/v1/plants/%7Bid%7D?token=%3CREQUIRED%3E', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));