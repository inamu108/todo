<template>
  <div>
    <header id="header">
      <div class="header-area">
        <h1 class="head01">Trello風</h1>
      </div>
    </header>
    <main id="main">
      <div class="main-area">
        <p class="info-line">All: {{totalCardCount}} tasks</p>
        <draggable :list="lists" @end="movingList" class="list-index">
          <List v-for="(list, index) in lists" :key="list.id" :title="list.title" :listIndex="index" :cards="list.cards" @change="movingCard" />
          <ListAdd />
        </draggable>
      </div>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ListAdd from './ListAdd.vue'
import List from './List.vue'
import { mapState } from 'vuex'

export default {
  components: {
    draggable,
    ListAdd,
    List,
  },
  computed: {
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
  methods: {
    movingCard() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
  }
}
</script>