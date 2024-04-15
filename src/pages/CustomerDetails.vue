<template>
    <div>
        <h1>This is customer Details Page</h1>
        <p class="using-routes"> :to="'/customer/' + $route.params.id + '/edit'" </p>
        <router-link 
       :to="{name: 'customerEdit', params:{id: $route.params.id}, query:{local: 'en', q:100}}"
        tag="button"
        >Edit Customer</router-link
        >
       
    </div>
</template>

<style>
.using-routes {
    color: red;
    background: #000;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 5px;
}</style>
