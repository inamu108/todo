<template>
  <div class="card">
    <button class="close-button" @click="removeCardList">×</button>
    <div class="body">{{ body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeCardList() {
      if (confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardList', { cardIndex: this.cardIndex, listIndex: this.listIndex })
      }
    }
  },
}</script>

