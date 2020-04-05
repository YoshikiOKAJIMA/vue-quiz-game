<template>
  <div>
    <div v-if="inBattle">
      <h1>This is Exploration</h1>
    </div>
    <Result v-else />
  </div>
</template>

<script>
import Result from "./Result.vue"

export default {
  name: "Exploration",
  components: {
    Result
  },
  data() {
    return {
      inBattle: true
    }
  },
  props: {
    msg: String
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
