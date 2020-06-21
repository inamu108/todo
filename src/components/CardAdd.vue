<template>
  <form :class="classList" @submit.prevent="addCardList">
    <input v-model="body" type="text" class="text-input" placeholder="Add new card" @focusin="startEditing" @focusout="finishEditing"/>
    <button v-if="isEditing || bodyExists" type="submit" class="add-button">Add</button>
  </form>
</template>


<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      body: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['add-card']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.bodyExists) {
        classList.push('addable')
      }
      return classList;
    },
    bodyExists() {
      return this.body.length > 0
    }
  },
  methods: {
    addCardList() {
      this.$store.dispatch('addCardList', { body: this.body, listIndex: this.listIndex })
      this.body = ''
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
