<template>
    <div>
        <h1>Counter Component</h1>
        <button @click="decrement">Decrement</button>
        <h3>{{ count }}</h3>
        <button @click="increment">Increment</button>
        <button @click="reset">Reset</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
       
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        },
    },
    computed: {
        increment() {
            this.count++;
        },
    }
};
</script>
