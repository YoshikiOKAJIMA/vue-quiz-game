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
  name: "App",
}
const firebaseConfig = {
  apiKey: "AIzaSyAkZXy48jypcSiJp8mptCdiWXRETFHS5BA",
  authDomain: "vue-quiz-game-35c1d.firebaseapp.com",
  databaseURL: "https://vue-quiz-game-35c1d.firebaseio.com",
  projectId: "vue-quiz-game-35c1d",
  storageBucket: "vue-quiz-game-35c1d.appspot.com",
  messagingSenderId: "872286908501",
  appId: "1:872286908501:web:9898af53249ffad37324dc",
  measurementId: "G-XKWRFL6ETS",
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
