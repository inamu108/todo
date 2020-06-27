<template>
  <form :class="classList" @submit.prevent="addList">
    <input v-model="title" type="text" class="text-input" placeholder="新しいリストを作る" @focusin="startEditing" @focusout="finishEditing">
    <button v-if="isEditing || titleExists" type="submit" class="add-button">Add</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      isEditing: false,
    }
  },
  computed: {
    classList: function() {
      const classList = ['addlist']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    titleExists: function() {
      return this.title.length > 0
    },
  },
  methods: {
    addList() {
      this.$store.dispatch('addlist', { title: this.title})
      this.title= ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
  }
}
</script>