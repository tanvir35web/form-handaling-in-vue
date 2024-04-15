<template>
    <div>
        <h1>This is contact page !</h1>
        <h3>Loaded Params Id: {{ paramsId }}</h3>
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loadedId: 0,
        };
    },
    computed: {
        paramsId() {
            return this.$route.params.id;
        }
    },

    methods: {
        navigateToHome() {
            this.$router.push({name: 'home'});
        },
    },
};
</script>
