const url = "";

async function getPokemon(url) {
    const response = await fetch(url);
    if(response.ok) {
        console.log(response);

        const data = await response.json();

        console.log(data.name);
        console.log('first')
    }
    else{
        alert('error', response);
    }
};

getPokemon(url);
console.log('second');
