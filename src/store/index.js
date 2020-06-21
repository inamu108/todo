import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//trello-listsをlocalStorageから取得する
const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    //localStorageに保存されたリストがあれば取得、なければデフォルトのリスト配列を設置します。
    //localStorageにはJSON形式の文字列型でデータが保存されているので、
    //取得するときにはJSON.parse(取得するデータ)でオブジェクトに変換する必要があります。
    lists: savedLists ? JSON.parse(savedLists):[
      {
        title: 'Backlog',
        cards: [
          { body: 'English'},
          { body: 'Mathematics'},
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science'}
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body})
    },
    removeCardList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardList(context, payload) {
      context.commit('addCardList', payload)
    },
    removeCardList(context, payload) {
      context.commit('removeCardList', payload)
    },
    updateList(context, payload) {
      context.commit('updateList', payload)
    }
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    },
  },
})
//下記のコードで、データの状態を更新後にlocalStorageへデータの状態を保存しています。
//stringifyでオブジェクトのtrello-listsをjson文字列に変換して保存
store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})
//trello-listsをjson文字列に変換


export default store