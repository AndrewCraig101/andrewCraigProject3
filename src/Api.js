const Api = () => {
    return (

    )
}
    const ApiCall = (displayMovies) => {
    for (let i = 1; i <= 50; i++) { const url=`https://pokeapi.co/api/v2/pokemon/${i}`; 
    fetch(url).then((res)=> res.json())
        .then((data) => {
        // console.log(data);
        const array = []
        const pokemon = {
        image: data.sprites['front_default'],
        name: data.name,
        id: data.id,
        height: data.height,
        type: data.types.map((type) => type.type.name).join(", ")
        };

        array.push(pokemon)
        // console.log(array.length);
        // console.log(pokemon);
        // tinderApp.displayPokemon(array)
        });
        }
        };
       