<template>
  <div class="message-alert" :class="{'active' : messages.length !== 0}">
    <div class="alert alert-dismissible mb-0 rounded-0"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      {{ item.message }}
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'alertMessage',
  methods: {
    ...mapMutations('alertModules', ['removeMessage'])
  },
  computed: {
    ...mapGetters('alertModules', ['messages'])
  }
}
</script>
