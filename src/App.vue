<template>
    <div id="app">
        <button @click="componentToRender = 'homeComponent'">Home</button>
        <button @click="componentToRender = 'counterComponent'">Counter</button>
        <button @click="componentToRender = 'userForm'">Form</button>

        <keep-alive>
            <component :is="componentToRender"></component>
        </keep-alive>
    </div>
</template>

<script>
import homeComponent from "./components/Home.vue";
import counterComponent from "./components/Counter.vue";
import userForm from "./components/userForm.vue";

export default {
    data() {
        return {
            componentToRender: "homeComponent",
        };
    },
    components: {
        homeComponent,
        counterComponent,
        userForm,
    },
};
</script>
