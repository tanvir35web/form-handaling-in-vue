<template>
    <div>
        <h1>This is my Component.</h1>
        <button @click="emitCustomEvent">Click me</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "I am Tanvir, I am from My component",
            age: 24,
            position: "Frontend developer",
        };
    },
    methods: {
        emitCustomEvent() {
            this.$emit("customEventName", { message: this.message, age: this.age, position: this.position});
        },
    },
};
</script>
