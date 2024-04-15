<template>
    <div>
        <h1>This is About Page</h1>
        <MyComponent @customEventName="handleCustomEvent"></MyComponent>

        <p>Message: {{ message }}</p>
        <p>Age: {{ age }}</p>
        <p>Position: {{ position }}</p>

        <button>
            <router-link to="/">Go to Home</router-link>
        </button>
    </div>
</template>

<script>
import MyComponent from "../components/MyComponent.vue";

export default {
    components: { MyComponent },
    data() {
        return {
            message: "",
            age: null,
            position: "",
        };
    },
    methods: {
        handleCustomEvent(message) {
            console.log("Received custom event with data:", message);
            this.message = message.message;
            this.age = message.age;
            this.position = message.position;
        },
    },
};
</script>
