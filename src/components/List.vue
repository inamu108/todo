<template>
  <div class="list">
    <div class="list-header">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardList }}</p>
      <div class="delete-list" @click="removeList">×</div>
    </div>
    <card v-for="(card, index) in cards" :body="card.body" :key="card.id" :cardIndex="index" :listIndex="listIndex" />
    <CardAdd :listIndex="listIndex" />
  </div>
</template>

<script>
import CardAdd from './CardAdd.vue'
import Card from './Card.vue'

export default {
  components: {
    CardAdd,
    Card,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cards: {
      type: Array,
      required: true
    }
  }, 
  computed: {
    totalCardList() {
      return this.cards.length
    }
  },
  methods: {
    removeList: function() {
      if(confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
  },
}
</script>