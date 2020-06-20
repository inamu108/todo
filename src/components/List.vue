<template>
  <div class="list">
    <div class="list-header">
      <p class="list-title">{{ title }}</p>
      <div class="delete-list" @click="removeList">×</div>
    </div>
    <CardAdd :listIndex="listIndex" />
  </div>
</template>

<script>
import CardAdd from './CardAdd.vue'

export default {
  components: {
    CardAdd,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
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