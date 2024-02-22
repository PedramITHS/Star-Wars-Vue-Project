<script>
export default {
    data() {
        return {
            // Ett fetch åt gången visas
            show: null,
            characters: [],
            planets: [],
            starships: [],
            species: [],
            modals: {}
        };
    },

    methods: {
        fetchCharacters() {
            fetch("https://swapi.dev/api/people/")
                .then(response => response.json())
                .then(data => {
                    this.show = 'characters';
                    this.characters = data.results;

                })
        }, fetchPlanets() {
            fetch("https://swapi.dev/api/planets/")
                .then(response => response.json())
                .then(data => {
                    this.show = 'planets';
                    this.planets = data.results;

                })
        },
        fetchStarships() {
            fetch("https://swapi.dev/api/starships/")
                .then(response => response.json())
                .then(data => {
                    this.show = 'starships';
                    this.starships = data.results;

                })
        },
        fetchSpecies() {
            fetch("https://swapi.dev/api/species/")
                .then(response => response.json())
                .then(data => {
                    this.show = 'species';
                    this.species = data.results;

                })
        },
        fetchFilms() {
            fetch("https://swapi.dev/api/films/")
                .then(response => response.json())
                .then(data => {
                    this.show = 'films';
                    this.films = data.results;

                })
        }



    }

}

</script>
<template>
    <div class="showItems">

        <div class="d-flex justify-content-center">
            <b-button-group>
                <!-- Knapp för att visa karaktärer -->

                <b-button size="lg" @click="fetchCharacters" style="background-color:#222226;">
                    Show characters</b-button>
                <!-- Knapp för att visa planeter -->

                <b-button size="lg" @click="fetchPlanets" style="background-color:#222226;">Show Planets
                </b-button>

                <!-- Knapp för att visa starships -->
                <b-button size="lg" @click="fetchStarships" style="background-color:#222226;">Show Starships
                </b-button>

                <!-- Knapp för att visa arter -->
                <b-button size="lg" @click="fetchSpecies" style="background-color:#222226;">Show Species
                </b-button>

                <!-- Knapp för att visa filmer -->
                <b-button size="lg" @click="fetchFilms" style="background-color:#222226;">Show Films
                </b-button>
            </b-button-group>
        </div>
        <div class="allCards">
            <!-- Visa karaktärer -->
            <b-row v-if="show === 'characters'">
                <b-col v-for="(character, index) in characters" :key="index" lg="3" mb="4" sm="6" class="mb-4">
                    <b-card title="Character" img-src="/assets/darth.jpeg" img-alt="Image" img-top tag="article"
                        style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            <p>{{ character.name }}</p>
                        </b-card-text>
                        <div>
                            <b-button v-b-modal.modal-1>Launch demo modal</b-button>
                            <b-modal id="modal-1" title="BootstrapVue">
                                <b-row>
                                    <b-col>
                                        <p v-for="height in character" class="my-4">{{ height.mass }}</p>
                                    </b-col>
                                </b-row>
                            </b-modal>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </div>
        <!-- Visa planeter -->
        <div>
            <b-row v-if="show === 'planets'">
                <b-col v-for="(planet, index) in planets" :key="index" lg="3" mb="4" sm="6" class="mb-4">
                    <b-card title="Planet" tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            <p>{{ planet.name }}</p>
                        </b-card-text>
                        <div>
                            <b-button v-b-modal.modal-1>Launch demo modal</b-button>
                            <b-modal id="modal-1" title="BootstrapVue">
                                <p class="my-4">Hello from modal!</p>
                            </b-modal>
                        </div>
                    </b-card></b-col></b-row>
        </div>
        <!-- Visa starships -->
        <div>
            <b-row v-if="show === 'starships'">

                <b-col v-for="(starship, index) in starships" :key="index" lg="3" mb="4" sm="6" class="mb-4">
                    <b-card title="Starships" tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            <p>{{ starship.name }}</p>
                        </b-card-text>
                        <div>
                            <b-button @click="modals[starship.name] = !modals[starship.name]">Launch demo modal</b-button>
                            <b-modal v-model="modals[starship.name]" title="BootstrapVue">
                                <p class="my-4">{{ starship.name }}</p>
                            </b-modal>
                        </div>
                    </b-card></b-col></b-row>
        </div>
        <!-- Visa arter -->
        <div>
            <b-row v-if="show === 'species'">
                <b-col v-for="(species, index) in species" :key="index" lg="3" mb="4" sm="6" class="mb-4">
                    <b-card title="Species" tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            <p>{{ species.name }}</p>
                        </b-card-text>
                        <div>
                            <b-button v-b-modal.modal-1>Launch demo modal</b-button>
                            <b-modal id="modal-1" title="BootstrapVue">
                                <p class="my-4">Hello from modal!</p>
                            </b-modal>
                        </div>
                    </b-card></b-col></b-row>
        </div>

        <!-- Visa filmer -->
        <div>
            <b-row v-if="show === 'films'">
                <b-col v-for="(film, index) in films" :key="index" lg="3" mb="4" sm="6" class="mb-4">
                    <b-card title="The real star wars films" tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            <p>{{ film.title }}</p>
                        </b-card-text>
                        <div>
                            <b-button v-b-modal.modal-1>Launch demo modal</b-button>
                            <b-modal id="modal-1" title="BootstrapVue">
                                <p class="my-4">Hello from modal!</p>
                            </b-modal>
                        </div>
                    </b-card></b-col></b-row>
        </div>
    </div>
</template>
<style>
.showItems {
    background-color: #222226;
    height: 150vh;
}

.allCards {
    background-color: #222226;

}

.d-flex.justify-content-center {
    padding: 20px;
}
</style>
