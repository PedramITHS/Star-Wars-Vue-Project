<script>
export default {
    data() {
        return {
            // Ett fetch åt gången visas
            show: null,
            characters: [],
            planets: [],
            starships: [],



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
        }

    }

}

</script>
<template>
    <div class="showItems">

        <div class="d-flex justify-content-center my-4">
            <b-button-group >
                <!-- Knapp för att visa karaktärer -->

                <b-button size="lg" @click="fetchCharacters" style="background-color: #0D0D0D;">
                    Show characters</b-button>
                <!-- Knapp för att visa planeter -->

                <b-button size="lg" @click="fetchPlanets" style="background-color: #0D0D0D;">Show Planets
                </b-button>

                <!-- Knapp för att visa starships -->
                <b-button  size="lg" @click="fetchStarships" style="background-color: #0D0D0D;">Show Starships
                </b-button>
            </b-button-group>
        </div>

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
                            <p class="my-4">Hello from modal!</p>
                        </b-modal>
                    </div>
                </b-card></b-col></b-row>
    </div>
    <!-- Visa planeter -->
    <div>
        <b-row v-if="show === 'planets'">
            <b-col v-for="(planet, index) in planets" :key="index" lg="3" mb="4" sm="6" class="mb-4">
                <b-card title="Planet" img-src="/assets/planet.jpeg" img-alt="Image" img-top tag="article"
                    style="max-width: 20rem;" class="mb-2">
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
                <b-card title="Starships" img-src="/assets/ships.webp" img-alt="Image" img-top tag="article"
                    style="max-width: 20rem;" class="mb-2">
                    <b-card-text>
                        <p>{{ starship.name }}</p>
                    </b-card-text>
                    <div>
                        <b-button v-b-modal.modal-1>Launch demo modal</b-button>
                        <b-modal id="modal-1" title="BootstrapVue">
                            <p class="my-4">Hello from modal!</p>
                        </b-modal>
                    </div>
                </b-card></b-col></b-row>
    </div>
</template>
<style>
</style>
