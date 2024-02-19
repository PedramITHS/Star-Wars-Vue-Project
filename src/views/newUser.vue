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
        <div  v-if="show" >
            <p class="character" v-for="(character, index) in characterName" :key="index">{{ character.name }}</p>
        </div>
</div>

</template>
<style>
.showCharacters{
    background-color:#222226;
}
.character{
    color: aliceblue;
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
