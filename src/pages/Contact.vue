<template>
    <div>
        <h1>This is contact page !</h1>
        <button @click="navigateToHome">Go Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push("/");
        },
    },
};
</script>
