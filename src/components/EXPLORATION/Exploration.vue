<template>
  <div>
    <div v-if="inBattle">
      <h1>This is Exploration</h1>
      <p>{{ chosenDungeon }}</p>
      <p>monster Info</p>
      <img :src="image_src" />
      <p>{{ chosenChara }}</p>
      <div>
        <p>{{ chosenQuiz.question }}</p>
        <ul>
          <li v-for="o in chosenQuiz.option" :key="o.index">
            <button @click="judgeCorrect(o.correct)">
              {{ o.index }}. {{ o.sentence }}
            </button>
          </li>
        </ul>
      </div>
      <p>{{ chosenDifficulty }}</p>
      <p>{{ msg }}</p>
      <button @click="quizCount++">次へ</button>
    </div>
    <Result v-else />
  </div>
</template>

<script>
import Result from "./Result.vue"

export default {
  name: "Exploration",
  components: {
    Result,
  },
  data() {
    return {
      inBattle: true,
      quizCount: 0,
      chosenQuiz: {
        ID: 1,
        question: "abcde",
        option: [
          {
            index: 1,
            sentence: "aaaaa",
            correct: true,
          },
          {
            index: 2,
            sentence: "bbbbb",
            correct: false,
          },
          {
            index: 3,
            sentence: "ccccc",
            correct: false,
          },
        ],
      },
      oldQuizID: [],
      msg: "no msg",
    }
  },
  computed: {
    chosenDungeon() {
      return this.$store.getters.dungeonList.filter(
        (value) => value.ID === this.$store.getters.chosenDungeonID
      )
    },
    chosenChara() {
      return this.$store.getters.charaList.filter(
        (value) => value.ID === this.$store.getters.chosenCharaID
      )
    },
    chosenDifficulty() {
      return this.$store.getters.chosenDifficulty
    },
    image_src() {
      return require("D:/cording/vue-project2/src/assets/" +
        this.$store.getters.monsterList[30].monster +
        ".png")
    },
  },
  methods: {
    chooseQuiz() {
      let random
      let qList = this.$store.getters.quizList
      do {
        random = Math.floor(Math.random() * qList.length)
      } while (this.oldQuizID.some((value) => value === qList[random].ID))
      this.chosenQuiz = qList[random]
      console.log("a")
    },
    judgeCorrect(bool) {
      if (bool) {
        this.msg = "正解"
      } else {
        this.msg = "不正解"
      }
      this.chooseQuiz
    },
  },
  created() {
    this.chooseQuiz
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
