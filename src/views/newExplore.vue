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
      modals: {},
    };
  },

  methods: {
    fetchCharacters() {
      fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((data) => {
          this.show = "characters";
          this.characters = data.results;
          //Visar karaktärer
        });
    },
    fetchPlanets() {
      fetch("https://swapi.dev/api/planets/")
        .then((response) => response.json())
        .then((data) => {
          this.show = "planets";
          this.planets = data.results;
          //Visar planeter
        });
    },
    fetchStarships() {
      fetch("https://swapi.dev/api/starships/")
        .then((response) => response.json())
        .then((data) => {
          this.show = "starships";
          this.starships = data.results;
          // Visar rymdskepp
        });
    },
    fetchSpecies() {
      fetch("https://swapi.dev/api/species/")
        .then((response) => response.json())
        .then((data) => {
          this.show = "species";
          this.species = data.results;
          //Visar arter
        });
    },
    fetchFilms() {
      fetch("https://swapi.dev/api/films/")
        .then((response) => response.json())
        .then((data) => {
          this.show = "films";
          this.films = data.results;
          //Visar filmer
        });
    },
  },
};
</script>

<template>
  <BContainer class="showItems">
    <b-button-group id="mobDisp">
      <b-dropdown center text="Choose your category">
        <b-dropdown-item @click="fetchCharacters">
          Show characters
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="fetchPlanets"> Show Planets </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="fetchStarships">
          Show Starships
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="fetchSpecies"> Show Species </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="fetchFilms"> Show Films </b-dropdown-item>
      </b-dropdown>
    </b-button-group>

    <div class="d-flex justify-content-center" style="width:">
      <b-button-group id="deskDisp">
        <!-- Knapp för att visa karaktärer -->

        <b-button
          size="lg"
          @click="fetchCharacters"
          style="background-color: #222226"
        >
          Show characters</b-button
        >
        <!-- Knapp för att visa planeter -->

        <b-button
          size="lg"
          @click="fetchPlanets"
          style="background-color: #222226"
          >Show Planets
        </b-button>

        <!-- Knapp för att visa starships -->
        <b-button
          size="lg"
          @click="fetchStarships"
          style="background-color: #222226"
          >Show Starships
        </b-button>

        <!-- Knapp för att visa arter -->
        <b-button
          size="lg"
          @click="fetchSpecies"
          style="background-color: #222226"
          >Show Species
        </b-button>

        <!-- Knapp för att visa filmer -->
        <b-button
  <div class="showItems">
    <div class="d-flex justify-content-center">
      <b-button-group>
        <!-- Knapp för att visa karaktärer -->

        <b-button
          class="x-btn"
          size="lg"
          @click="fetchCharacters"
          style="background-color: #222226"
        >
          Show characters</b-button
        >
        <!-- Knapp för att visa planeter -->

        <b-button
          class="x-btn"
          size="lg"
          @click="fetchPlanets"
          style="background-color: #222226"
          >Show Planets
        </b-button>

        <!-- Knapp för att visa starships -->
        <b-button
          class="x-btn"
          size="lg"
          @click="fetchStarships"
          style="background-color: #222226"
          >Show Starships
        </b-button>

        <!-- Knapp för att visa arter -->
        <b-button
          class="x-btn"
          size="lg"
          @click="fetchSpecies"
          style="background-color: #222226"
          >Show Species
        </b-button>

        <!-- Knapp för att visa filmer -->
        <b-button
          class="x-btn"
          size="lg"
          @click="fetchFilms"
          style="background-color: #222226"
          >Show Films
        </b-button>
      </b-button-group>
    </div>
    <div class="allCards">
      <!-- Visa karaktärer -->
      <b-row v-if="show === 'characters'">
        <b-col
          v-for="(character, index) in characters"
          :key="index"
          lg="3"
          mb="4"
          sm="6"
          class="mb-4"
        >
          <b-card
            title="Character"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <p>{{ character.name }}</p>
            </b-card-text>
            <div>
              <!-- Modal -->
              <b-button
                @click="modals[character.name] = !modals[character.name]"
                >Learn More</b-button
              >
              <b-modal v-model="modals[character.name]" title="BootstrapVue">
                <h5 class="my-4">{{ character.name }}</h5>
                <p class="my-4">{{ "Height: " + character.height + " cm" }}</p>
                <p class="my-4">{{ "Hair color: " + character.hair_color }}</p>
                <p class="my-4">{{ "Gender: " + character.gender }}</p>
              </b-modal>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <!-- Visa planeter -->
    <div>
      <b-row v-if="show === 'planets'">
        <b-col
          v-for="(planet, index) in planets"
          :key="index"
          lg="3"
          mb="4"
          sm="6"
          class="mb-4"
        >
          <b-card
            title="Planet"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <p>{{ planet.name }}</p>
            </b-card-text>
            <div>
              <!-- Modal -->
              <b-button @click="modals[planet.name] = !modals[planet.name]"
                >Learn More</b-button
              >
              <b-modal v-model="modals[planet.name]" title="BootstrapVue">
                <h5 class="my-4">{{ planet.name }}</h5>
                <p class="my-4">{{ "Population: " + planet.population }}</p>
                <p class="my-4">{{ "Terrain: " + planet.terrain }}</p>
              </b-modal>
            </div>
          </b-card></b-col
        ></b-row
      >
    </div>
    <!-- Visa starships -->
    <div>
      <b-row v-if="show === 'starships'">
        <b-col
          v-for="(starship, index) in starships"
          :key="index"
          lg="3"
          mb="4"
          sm="6"
          class="mb-4"
        >
          <b-card
            title="Starships"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <p>{{ starship.name }}</p>
            </b-card-text>
            <div>
              <!-- Modal -->
              <b-button @click="modals[starship.name] = !modals[starship.name]"
                >Learn More</b-button
              >
              <b-modal v-model="modals[starship.name]" title="BootstrapVue">
                <h5 class="my-4">{{ starship.name }}</h5>
                <p class="my-4">{{ "Length: " + starship.length }}</p>
                <p class="my-4">{{ "Crew: " + starship.crew }}</p>
              </b-modal>
            </div>
          </b-card></b-col
        ></b-row
      >
    </div>
    <!-- Visa arter -->
    <div>
      <b-row v-if="show === 'species'">
        <b-col
          v-for="(species, index) in species"
          :key="index"
          lg="3"
          mb="4"
          sm="6"
          class="mb-4"
        >
          <b-card
            title="Species"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <p>{{ species.name }}</p>
            </b-card-text>
            <div>
              <!-- Modal -->
              <b-button @click="modals[species.name] = !modals[species.name]"
                >Learn More</b-button
              >
              <b-modal v-model="modals[species.name]" title="BootstrapVue">
                <h5 class="my-4">{{ species.name }}</h5>
                <p class="my-4">{{ "Hair colors: " + species.hair_colors }}</p>
                <p class="my-4">
                  {{ "Lifespan: " + species.average_lifespan + " years" }}
                </p>
              </b-modal>
            </div>
          </b-card></b-col
        ></b-row
      >
    </div>

    <!-- Visa filmer -->
    <div>
      <b-row v-if="show === 'films'">
        <b-col
          v-for="(film, index) in films"
          :key="index"
          lg="3"
          mb="4"
          sm="6"
          class="mb-4"
        >
          <b-card
            title="The real star wars films"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <p>{{ film.title }}</p>
            </b-card-text>
            <div>
              <!-- Modal -->
              <b-button @click="modals[film.name] = !modals[film.name]"
                >Learn More</b-button
              >
              <b-modal v-model="modals[film.name]" title="BootstrapVue">
                <h5 class="my-4">{{ film.name }}</h5>
                <p class="my-4">{{ "Episode: " + film.episode_id }}</p>
                <p class="my-4">{{ "Release date: " + film.release_date }}</p>
              </b-modal>
            </div>
          </b-card></b-col
        ></b-row
      >
    </div>
  </div>
</template>
<style>
#app {
  background-color: #222226;
}

.showItems {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(13, 13, 13, 1)),
    url("assets/explore-background2.webp");

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 700px;
  color: #ffff;
}

.d-flex.justify-content-center {
  padding: 20px;
}

#mobDisp {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 520px) {
  #deskDisp {
    display: none;
  }
}

@media screen and (min-width: 520px) {
  #mobDisp {
    display: none;
  }
}
.x-btn:active,
.x-btn:focus {
  background-color: white;
  color: white;
  box-shadow: 10px 10px 50px 0 rgba(46, 103, 248, 1);
}
.x-btn:hover {
  background-color: white;
  color: black;
  box-shadow: 10px 10px 50px 0 rgba(46, 103, 248, 1);
}
</style>
