<template>
    <div>
        <ul>
            <router-link class="customer-no-page" to="/customer/1" tag="li"> >>> Customer - 1</router-link>
            <router-link class="customer-no-page" to="/customer/2" tag="li"> >>> Customer - 2</router-link>
            <router-link class="customer-no-page" to="/customer/3" tag="li"> >>> Customer - 3</router-link>
        </ul>
    </div>
</template>

<style>
.customer-no-page {
    list-style-type: none;
    cursor: pointer;
    padding: 10px;
    font-weight: 500;
    font-size: large;
    color: red;
    transition: .3s;
}

.customer-no-page:hover {
    background-color: #eee;
}
</style>
