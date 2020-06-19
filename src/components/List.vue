<template>
  <div class="list">
    <div class="list-header">
      <p class="list-title">{{ title }}</p>
      <div class="delete-list" @click="removeList">×</div>
    </div>
  </div>
</template>

<script>
export default {
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