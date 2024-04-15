<template>
    <div id="app" class="container ">
        <ul class="nav-links">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<style> 
.nav-links {
    list-style-type: none;
    display: flex;
    color: white;
    font-size: 20px;
    padding-top: 20px;
    font-weight: 600;
}

li {
    padding-right: 50px;
}
</style>
