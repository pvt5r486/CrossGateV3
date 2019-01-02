<template>
  <div id="app">
    <loading :active.sync="isLoading">
      <img src="@/assets/img/loading.gif" alt="" width="200">
    </loading>
    <router-view></router-view>
    <alertMessage></alertMessage>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import alertMessage from '@/components/AlertMessage'

export default {
  name: 'App',
  components: {
    alertMessage
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="scss">
@import './assets/all';
</style>
