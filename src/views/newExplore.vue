<script>
export default{
    data(){
        return{
            characterName: [],
            show: false

        };
    },

methods:{
    fetchCharacters(){
        fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(data => {
            this.characterName = data.results;
            this.show = true;
        })}

}

}

</script>
<template>

<div class="showCharacters">
        <b-button variant="danger" @click="fetchCharacters">Show characters</b-button>

            <b-row v-if="show">
            <b-col  v-for="(character, index) in characterName" :key="index" lg="3" mb="4" sm="6" class="mb-4">
  <b-card
    title="Character"
    img-src="/assets/darth.jpeg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-text>
        <p>{{ character.name }}</p>
    </b-card-text>
    <div>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal></div>
  </b-card></b-col></b-row>
</div>


</template>
<style>

.showCharacters{
    background-color:#222226;
}
.character{
    color:#222226;
    text-align: center;

   font-family: "Poppins", sans-serif;
  font-weight: 300;
}
.showCharacters > h1{
    color: aliceblue;
    text-align: center;
   font-family: "Poppins", sans-serif;
  font-weight: 600;


}


</style>
