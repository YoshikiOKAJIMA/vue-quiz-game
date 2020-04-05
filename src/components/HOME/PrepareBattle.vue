<template>
  <div>
    <p>
      ユーザー：{{ userInfo.userName }} 所持金：{{
        userInfo.possessMoney
      }}
      正解率：{{ (userInfo.correctNum / userInfo.quizNum) * 100 + "%" }}
    </p>
    <div>
      <p>使用キャラ：</p>
      <select>
        <option v-for="chara in possessCharaList" :key="chara.ID">
          {{ chara }}
        </option>
      </select>
    </div>
    <div>
      <p>ダンジョン：</p>
      <select>
        <option v-for="dungeon in accessibleDungeonList" :key="dungeon.ID">
          {{ dungeon }}
        </option>
      </select>
    </div>
    <div>
      <p>難易度：</p>
      <select class="defficulty">
        <option>よわい</option>
        <option>ふつう</option>
        <option>つよい</option>
      </select>
    </div>

    <button @click="explore">Go</button>
  </div>
</template>

<script>
export default {
  name: "PrepareBattle",
  computed: {
    userInfo() {
      return this.$store.getters.userInfo
    },
    possessCharaList() {
      return this.$store.getters.charaList.filter(value => value.possessed)
    },
    accessibleDungeonList() {
      return this.$store.getters.dungeonList.filter(value => value.possessed)
    }
  },
  methods: {
    explore() {
      this.$router.push("Exploration")
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
