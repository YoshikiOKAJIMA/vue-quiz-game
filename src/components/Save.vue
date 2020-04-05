<template>
  <div>
    <h1>This is Save/Load</h1>
    <p>Now count is...{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "Save",
  props: {
    msg: String
  },
  computed: {
    count() {
      return this.$store.getters.count
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
