<template>
    <div class="counter-warp">
        <p>Vuex counter：{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
// Use Vuex
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'storeTest',
    computed: {
        ...mapGetters({
            count: 'count'
        })
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement'
        ])
    }
}
</script>

<style>
.counter-warp {
    text-align: center;
    margin-top: 100px;
}
.home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
}
</style>