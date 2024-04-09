<template>
    <div>
       
        <h1 class="heading-text" :style="{ color: color }">
            This is test Component
        </h1>
        <button class="btn btn-primary" @click="handleColorChange">Change text color</button>
       <div class="image-div">
        <img class="cover-photo" :src="cover" alt="cover photo from linkedIn" />
        <img class="profile-photo" :src="photo" alt="tanvir profile photo" v-show="isShow" />
       </div>
       <button @click="handleProfileShow"  >Show Profile</button>
    </div>
</template>

<script>
import tanvirPhoto from "../../public/tanvir.jpg";
import coverPhoto from "../../public/cover.jpg";
export default {
    data() {
        return {
            color: "green",
            isRed: false,
            photo: tanvirPhoto,
            cover: coverPhoto,
            isShow: false,
        };
    },
    methods: {
        handleColorChange() {
            this.color = this.isRed ? "green" : "red";
            this.isRed = !this.isRed;
        },
        handleProfileShow() {
            this.isShow = !this.isShow;
        }
    },
};
</script>

<style>
.heading-text {
    font-size: 40px;
    font-weight: bold;
    background-color: aquamarine;
    padding: 10px;
    border-radius: 10px;
    margin: 2px;
    text-align: center;
    max-width: 500px;
}

.image-div {
    position: relative;
}

.cover-photo {
    width: 800px;
    border-radius: 10px;
}

.profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px;
    position: absolute;
    top:80px;
    left: 100px;
    border: 3px red solid;
}

</style>
