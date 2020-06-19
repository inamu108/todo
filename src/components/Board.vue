<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <list v-for="(list, index) in lists" :key="list.id" :title="list.title" :listIndex="index"></list>
      <ListAdd></ListAdd>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
import List from './List.vue'
import { mapState} from 'vuex'

export default {
  components: {
    ListAdd,
    List,
  },
  computed: {
    ...mapState([
      'lists'
    ]),
  },
}
</script>