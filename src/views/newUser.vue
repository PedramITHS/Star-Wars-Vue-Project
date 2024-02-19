<script>
export default{
    data(){
        return{
            characterNames: []
        };
    },

mounted(){
        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.characterNames = data;
        })

}

}

</script>
<template>
    <div>
        <h1>Show Characters</h1>

        <ul>
            <li v-for="name in characterNames" :key="name">{{ name }}</li>
        </ul>

    </div>


</template>
