<script>
export default {

    data() {
        return {
            button: false
        }
    },

    methods: {
        toggle() {
            this.button = !this.button
        }
    }
}
</script>

<style scoped>
#desk_menu {
    background-color: black;

}

a {
    font-weight: 900;
    color: rgb(255, 255, 255);
}

.menuFade-enter-active,
.menuFade-leave-active {
    transition: opacity 0.5s ease;
}

.menuFade-enter-from,
.menuFade-leave-from {
    opacity: 0;
}

/* @media screen and (max-width: 480px) {

    #desk_menu {
        display: none;
    }

} */

</style>

<template>


    <div class="d-flex p-4" id="desk_menu">

        <!-- <BImg @click="toggle" src="../../assets/imageedit_4_7991310453.png" rounded="circle" alt="hello ?" /> -->

        <BButton @click="toggle" variant="primary">Menu</BButton>
        <Transition name="menuFade">
            <BNav v-if="button">
                <BNavItem><RouterLink to="/">Home</RouterLink></BNavItem>
                <BNavItem><RouterLink to="Quiz">Quiz</RouterLink></BNavItem>
                <BNavItem><RouterLink to="Top">Leaderboard</RouterLink></BNavItem>
                <BNavItem><RouterLink to="Exp">Explore</RouterLink></BNavItem>
                <BNavItem><RouterLink to="Contact">Contact</RouterLink></BNavItem>
            </BNav>
        </Transition>
    </div>
</template>
