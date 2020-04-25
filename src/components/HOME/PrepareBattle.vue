<template>
  <div>
    <p>
      ユーザー：{{ userInfo.userName }} 所持金：{{
        userInfo.possessMoney
      }}
      正解率：{{ (userInfo.correctNum / userInfo.quizNum) * 100 + "%" }}
    </p>
    <div>
      <p>使用キャラ</p>
      <select v-model="chooseChara" :label="chooseChara">
        <option
          v-for="chara in possessCharaList"
          :key="chara.ID"
          :label="
            chara.ID +
              '. ' +
              chara.job +
              ' || [HP:' +
              chara.hp +
              '] [STR:' +
              chara.str +
              '] [AGI:' +
              chara.agi +
              '] ||'
          "
        >
          {{ chara.ID }}
        </option>
      </select>
    </div>
    <div>
      <p>難易度</p>
      <select v-model="chooseDifficulty">
        <option>かんたん</option>
        <option>ふつう</option>
        <option>むずかしい</option>
      </select>
    </div>
    <div>
      <p>ダンジョン</p>
      <select v-model="chooseDungeon">
        <option
          v-for="dungeon in accessibleDungeonList"
          :key="dungeon.ID"
          :label="
            dungeon.ID +
              '. ' +
              dungeon.dungeon +
              ' || [お宝:' +
              dungeon.treasure +
              'G] [敵の数:' +
              (dungeon.monsterId.length + 1) +
              '体] ||'
          "
        >
          {{ dungeon.ID }}
        </option>
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
      return this.$store.getters.charaList.filter((value) => value.possessed)
    },
    accessibleDungeonList() {
      return this.$store.getters.dungeonList.filter((value) => value.possessed)
    },
    chooseChara: {
      get() {
        let chara = {}
        Object.assign(
          chara,
          this.$store.getters.charaList.filter(
            (value) => value.ID === this.$store.getters.chosenCharaID
          )[0]
        )
        return (
          chara.ID +
          ". " +
          chara.job +
          " || [HP:" +
          chara.hp +
          "] [STR:" +
          chara.str +
          "] [AGI:" +
          chara.agi +
          "] ||"
        )
      },
      set(value) {
        this.$store.dispatch("updateChosenChara", Number(value))
      },
    },
    chooseDungeon: {
      get() {
        let dungeon
        dungeon = Object.assign(
          {},
          dungeon,
          this.$store.getters.dungeonList.filter(
            (value) => value.ID === this.$store.getters.chosenDungeonID
          )[0]
        )
        return dungeon
      },
      set(value) {
        this.$store.dispatch("updateChosenDungeon", Number(value))
        /*
        this.$store.dispatch(
          "updateChosenDungeon",
          Number(value.substr(0, value.indexOf(".")))
        )*/
      },
    },
    chooseDifficulty: {
      get() {
        return this.$store.getters.chosenDifficulty
      },
      set(value) {
        this.$store.dispatch("updateChosenDifficulty", value)
      },
    },
  },
  methods: {
    explore() {
      this.$router.push("Exploration")
    },
    /*
    chooseQuiz(value) {
      this.chosenQuizId = Number(value.substr(0, value.indexOf(".")))
    },*/
  },
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
