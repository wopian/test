<template lang="pug">
  div
    appHeader
    nuxt
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="stylus">
  @import '../styles/config'
  @import '../styles/bootstrap'
</style>
