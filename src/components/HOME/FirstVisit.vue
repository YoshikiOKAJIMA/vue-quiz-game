<template>
  <div>
    <Register @emitRegister="doRegister = false" v-if="doRegister" />
    <div v-else>
      <p>{{ userName }}さん、ようこそ！</p>
      <p>
        ダンジョンに潜って奥に眠る財宝を集めてください。ダンジョンにはモンスターが巣食っていますが、クイズにより打倒してください。ダンジョンを三回クリアすると魔王も出現します。これを撃破するとゲームクリアです。
      </p>
      <button @click="footprint">冒険を始める</button>
    </div>
  </div>
</template>

<script>
import Register from "./Register.vue"

export default {
  name: "FirstVisit",
  components: {
    Register
  },
  data() {
    return {
      doRegister: true
    }
  },
  computed: {
    userName: {
      get() {
        return this.$store.getters.userInfo.userName
      },
      set(value) {
        this.$store.dispatch("doUpdate", value)
      }
    }
  },
  methods: {
    footprint() {
      this.$emit("footprint")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
