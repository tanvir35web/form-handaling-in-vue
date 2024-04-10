<template>
    <div id="app">
        <div class="allTabButtons">
            <button
                class="btn btn-info"
                @click="componentToRender = 'homeComponent'"
            >
                Home
            </button>
            <button
                class="btn btn-info"
                @click="componentToRender = 'counterComponent'"
            >
                Counter
            </button>
            <button
                class="btn btn-info"
                @click="componentToRender = 'userForm'"
            >
                Form
            </button>
            <button class="btn btn-info" @click="componentToRender = 'Test'">
                Test
            </button>
            <button
                class="btn btn-info"
                @click="componentToRender = 'ApiOperation'"
            >
                Api Cards
            </button>
        </div>

        <keep-alive>
            <component :is="componentToRender"></component>
        </keep-alive>
        <Test :book="msg"/>
    </div>
</template>

<script>
import homeComponent from "./components/Home.vue";
import counterComponent from "./components/Counter.vue";
import userForm from "./components/userForm.vue";
import Test from "./components/Test.vue";
import ApiOperation from "./components/ApiOperation.vue";

export default {
    data() {
        return {
            componentToRender: "homeComponent",
            msg : "Hello, I am props!",
        };
    },
    components: {
        homeComponent,
        counterComponent,
        userForm,
        Test,
        ApiOperation,
    },
};
</script>

<style>
.allTabButtons {
    font-size: 20px;
}

button {
    margin-left: 5px;
}
body {
    padding: 10px;
}
</style>
