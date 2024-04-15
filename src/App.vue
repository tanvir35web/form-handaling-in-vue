<template>
    <div id="app" class="container">
        <ul class="nav-links">
            <router-link active-class="active" exact class="nav-item" tag="li" to="/">Home</router-link>
            <router-link active-class="active" exact class="nav-item" tag="li" to="/about">About</router-link>
            <router-link active-class="active" exact class="nav-item" tag="li" to="/contact/1">Contact-1</router-link>
            <router-link active-class="active" exact class="nav-item" tag="li" to="/contact/2">Contact-2</router-link>
            <router-link active-class="active" exact class="nav-item" tag="li" to="/customer">Customer</router-link>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<style>
.active{
    background-color: rgb(81, 49, 112)!important;
}
.nav-links {
    list-style-type: none;
    display: flex;
    color: white;
    font-size: 20px;
    padding-top: 20px;
    font-weight: 500;
}

.nav-item {
    margin-right: 10px;
    cursor: pointer;
    background-color: rgb(73, 73, 73);
    padding: 5px 15px;
    border-radius: 5px;
    transition: 0.3s;
    
}
.nav-item:hover {
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
    background-color: rgb(81, 49, 112);
    padding: 5px 15px;
    border-radius: 5px;
    transition: 0.3s;
    
}
</style>
