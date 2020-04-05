<template>
  <div>
    <h1>HOME</h1>
    <FirstVisit @footprint="firstVisit = false" v-if="this.firstVisit" />
    <PrepareBattle v-else />
    <button @click="countUp">Count Up↑</button>
    <button @click="countDown">Count Down↓</button>
  </div>
</template>

<script>
import FirstVisit from "./FirstVisit.vue"
import PrepareBattle from "./PrepareBattle.vue"
export default {
  name: "Home",
  components: {
    FirstVisit,
    PrepareBattle
  },
  data() {
    return {
      firstVisit: true
    }
  },
  methods: {
    countUp() {
      this.$store.commit("increment")
    },
    countDown() {
      this.$store.commit("decrement")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
