<template>
    <div>
        <h1>This is the Home Component</h1>
        <hr />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            aperiam quaerat nobis dolores quis quia, deserunt soluta eveniet
            voluptate explicabo. Fugiat, quam ea sequi eum dolore sit fugit?
            Debitis laboriosam, consequuntur, beatae praesentium voluptatibus
            veritatis quo saepe, perferendis quaerat vitae blanditiis odio qui
            nulla magni deserunt sapiente accusamus nemo ipsam fuga consequatur
            dolores. Cum, quo atque porro tempora nulla expedita, ab cupiditate
            hic quisquam reprehenderit natus ex. At aperiam sapiente, nam
            reprehenderit tempora maiores quisquam officiis vitae eius,
            quibusdam quo ullam quos cumque blanditiis magni temporibus porro
            beatae ex quae magnam fuga nulla ut! Ullam magnam eveniet, nam est
            incidunt eaque odio aut asperiores, illo minima, ab quo
            necessitatibus voluptatibus voluptatum harum a! Soluta sit labore
            mollitia suscipit, officia libero alias eligendi voluptates maiores
            aspernatur delectus nihil perspiciatis aut qui vitae expedita
            laboriosam asperiores esse distinctio laudantium eos odio optio
            dicta earum. Cumque sapiente maiores perspiciatis id saepe ipsa ut
            quo dolorum earum modi nulla ipsum a praesentium, accusamus debitis
            mollitia optio animi voluptatum adipisci corporis nam? Nemo
            voluptatibus culpa temporibus soluta consectetur, a veniam dicta
            enim cum, ea fugit iusto, ipsa molestiae ipsum quo quidem?
            Voluptatem, deserunt unde distinctio ipsa qui, nemo sunt itaque modi
            libero rem facere labore!
        </p>
        <h3>Our Services</h3>
        <ul>
            <li v-for="item in menu" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import { serviceMenu } from "./mixin.js";
export default {
    data() {
        return {
            name: "Home",
        };
    },
    mixins: [serviceMenu],
};
</script>
