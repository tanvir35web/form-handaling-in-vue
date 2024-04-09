<template>
    <div class="text-center">
        <h1>Card data from api using vue-resources</h1>
        <div class="card-wrapper">
            <div class="card" v-for="(card, index) in cards" :key="index">
                <h1>{{ card.id }}</h1>
                <h2>{{ card.title.slice(0,15) }}</h2>
                <p>{{ card.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [],
        };
    },

    created() {
        this.$http
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                this.cards = response.body.slice(0, 20);
            });
    },
};
</script>

<style>
.card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card {
    width: 300px;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
}
</style>
