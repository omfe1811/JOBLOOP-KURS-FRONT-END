const API_URL = 'https://pokeapi.co/api';
var pokemonData = undefined;
let pokemonListData = [];

let page = 0;
let search = "";
let pokemonId = 1;

const filters = { shiny: false, direction: 'front' };

const viewPokemonById = async (id) => {
    pokemonId = id;
    search = "";
    await fetchPokemon(id);
    renderPage();
}

const nextPokemonButton = () => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Next Pokemon';
    buttonElement.classList.add('nextPokemonButton');

    buttonElement.addEventListener(
        'click',
        async () => await viewPokemonById(pokemonId + 1)
    );

    return buttonElement;
};

const previousPokemonButton = () => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Previous Pokemon';
    buttonElement.classList.add('previousPokemonButton');

    buttonElement.addEventListener(
        'click',
        async () => await viewPokemonById(pokemonId - 1)
    );

    return buttonElement;
};

const toggleShinyButton = () => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Toggle Shiny';
    buttonElement.classList.add('toggleShinyButton');

    buttonElement.addEventListener(
        'click',
        () => {
            filters.shiny = !filters.shiny;
            renderPage();
        }
    )

    return buttonElement;
}

const rotatePokemon = () => filters.direction === 'front'
    ? filters.direction = 'back'
    : filters.direction = 'front'

const rotatePokemonButton = () => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('rotatePokemonButton');
    buttonElement.textContent = 'Rotate Pokemon';
    buttonElement.addEventListener('click', () => {
        rotatePokemon();
        renderPage();
    });
    return buttonElement;
};

const fetchPokemon = async (input) => {
    const response = await fetch(`${API_URL}/v2/pokemon/${input}`);
    pokemonData = await response.json();
    pokemonId = pokemonData.id;
};

const searchButton = () => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = "Search";
    buttonElement.classList.add('searchButton');
    buttonElement.addEventListener('click', async () => {
        if (search.length > 0) {
            if ( !isNaN(parseInt(search)) ) {
                pokemonId = parseInt(search)
            }

            await fetchPokemon(search);
            renderPage();
        } else {
            pokemonData = undefined;
            renderPage();
        }
    })
    return buttonElement;
}

const searchInput = () => {
    const inputElement = document.createElement("input");
    inputElement.value = search;
    inputElement.placeholder = "ID or pokemon name to search for...";
    inputElement.classList.add('searchInput');
    inputElement.addEventListener('input', () => search = inputElement.value);
    return inputElement;
};

const displayPokemon = () => {
    const imgElement = document.createElement("img");

    if (filters.shiny) {
        imgElement.src = filters.direction === 'front'
            ? pokemonData.sprites.front_shiny
            : pokemonData.sprites.back_shiny
    } else {
        imgElement.src = filters.direction === 'front'
            ? pokemonData.sprites.front_default
            : pokemonData.sprites.back_default
    }

    imgElement.width = 150;
    imgElement.height = 150;

    document.body.appendChild(imgElement);
};

const fetchAllPokemons = async (offset) => {
    const response = await fetch(`${API_URL}/v2/pokemon?limit=10&offset=${offset}`);
    if (response.ok) {
        const pokemonData = await response.json();
        pokemonListData = pokemonData.results;
    }
}

const getPokemonImage = async (pokemon) => {
    const imgElement = document.createElement('img');

    imgElement.src = pokemon.sprites.front_default;
    imgElement.width = 200;
    imgElement.height = 200;

    return imgElement;
}

const viewPokemonButton = (pokemon) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Details';
    buttonElement.addEventListener('click', () => {
        pokemonData = pokemon;
        pokemonId = pokemon.id;
        renderPage();
    })
    return buttonElement;
};

const getPokemonByURL = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

const displayPokemonList = async () => {
    const pokemonListContainer = document.createElement('div');
    pokemonListData.forEach(async (pokemon) => {
        const pokemonContainer = document.createElement('div');

        const pokemonObj = await getPokemonByURL(pokemon.url);

        const pokemonName = document.createElement('h1');
        pokemonName.textContent = pokemon.name;

        pokemonContainer.append(
            await getPokemonImage(pokemonObj),
            pokemonName,
            viewPokemonButton(pokemonObj)
        );
        pokemonListContainer.appendChild(pokemonContainer);
    });
    document.body.appendChild(pokemonListContainer);
};

const nextPageButton = () => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Next page';
    buttonElement.addEventListener('click', () => {
        page++;
        renderPage();
    });
    return buttonElement;
};

const previousPageButton = () => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Previous page';
    buttonElement.addEventListener('click', () => {
        if (page > 0) {
            page--;
        };
        renderPage();
    });
    return buttonElement;
};

const paginationContainer = () => {
    const paginationButtonContainer = document.createElement('div');
    paginationButtonContainer.classList.add('pagination-buttons');
    paginationButtonContainer.append(
        previousPageButton(),
        nextPageButton()
    )
    return paginationButtonContainer;
};


const renderPage = () => {
    document.body.replaceChildren();
    document.body.append(
        searchInput(),
        searchButton()
    )

    if (!pokemonData) {
        document.body.append(
            paginationContainer()
        );
        fetchAllPokemons(page * 10).then(() => displayPokemonList());
    } else {
        displayPokemon()
        document.body.append(
            rotatePokemonButton(),
            toggleShinyButton(),
            nextPokemonButton(),
            previousPokemonButton()
        );
    }
}

renderPage();