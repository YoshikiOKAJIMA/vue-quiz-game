import "babel-polyfill"
import Vue from "vue"
import Vuex from "vuex"

import charaList from "./data/charaList.json"
import dungeonList from "./data/dungeonList.json"
import monsterList from "./data/monsterList.json"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      userName: "名前を入力してください。",
      possessMoney: 0,
      quizNum: 0,
      correctNum: 0
    },
    count: 0,
    charaList: charaList,
    dungeonList: dungeonList,
    monsterList: monsterList
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
    }
  },
  mutations: {
    setUsername(state, payload) {
      state.userInfo.userName = payload.userName
    },
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    doUpdate({ commit }, userName) {
      commit("seUsername", { userName })
    }
  }
})

export default store
