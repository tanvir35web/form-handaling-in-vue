<template>
    <div class="page-404">
        <img :src="page404" alt="404 page">
        <h3>Page Not Found</h3>

    </div>
</template>

<script>
import page404 from '../../public/404.jpg'
export default {
    data() {
        return {
            page404: page404,
        }
    }
}</script>

<style>
    .page-404 {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>