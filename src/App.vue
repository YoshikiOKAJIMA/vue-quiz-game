<template>
  <div id="app">
    <ul class="links">
      <li>
        <router-link to="/Home" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/Gacha">Gacha</router-link>
      </li>
      <li>
        <router-link to="/Save">SAVE/LOAD</router-link>
      </li>
      <li>
        <router-link to="/Manual">Manual</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
