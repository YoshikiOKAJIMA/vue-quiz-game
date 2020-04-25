import "babel-polyfill"
import Vue from "vue"
import Vuex from "vuex"

import charaList from "./data/charaList.json"
import dungeonList from "./data/dungeonList.json"
import monsterList from "./data/monsterList.json"
import quizList from "./data/quizList.json"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      userName: "名前を入力してください。",
      possessMoney: 0,
      quizNum: 0,
      correctNum: 0,
    },
    count: 0,
    charaList: charaList,
    dungeonList: dungeonList,
    monsterList: monsterList,
    quizList: quizList,
    chosenCharaID: 1,
    chosenDungeonID: 1,
    chosenDifficulty: "かんたん",
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    count(state) {
      return state.count
    },
    charaList(state) {
      return state.charaList
    },
    dungeonList(state) {
      return state.dungeonList
    },
    monsterList(state) {
      return state.monsterList
    },
    quizList(state) {
      return state.quizList
    },
    chosenCharaID(state) {
      return state.chosenCharaID
    },
    chosenDungeonID(state) {
      return state.chosenDungeonID
    },
    chosenDifficulty(state) {
      return state.chosenDifficulty
    },
  },
  mutations: {
    setUsername(state, payload) {
      state.userInfo.userName = payload.userName
    },
    setChosenChara(state, payload) {
      state.chosenCharaID = payload.chosenChara
    },
    setChosenDungeon(state, payload) {
      state.chosenDungeonID = payload.chosenDungeon
    },
    setChosenDifficulty(state, payload) {
      state.chosenDifficulty = payload.chosenDifficulty
    },
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
  actions: {
    doUpdate({ commit }, userName) {
      commit("setUsername", { userName })
    },
    updateChosenChara({ commit }, chosenChara) {
      commit("setChosenChara", { chosenChara })
    },
    updateChosenDungeon({ commit }, chosenDungeon) {
      commit("setChosenDungeon", { chosenDungeon })
    },
    updateChosenDifficulty({ commit }, chosenDifficulty) {
      commit("setChosenDifficulty", { chosenDifficulty })
    },
  },
})

export default store
