<template>
  <div>
    <h1>登録画面</h1>
    <p>あなたのお名前を教えてください！</p>
    <div class="register-wrapper">
      <input type="text" v-model="userName" />
      <button @click="emitRegister">
        登録
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
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
    emitRegister() {
      this.$emit("emitRegister")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
