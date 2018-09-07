<template lang="pug">
  div
    appHeader
    nuxt
</template>

<script>
import AppHeader from '~/components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="sass">
  @import '../styles/variables'
  @import '../styles/bootstrap'

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    display: flex
    flex-direction: column
    min-height: 100vh
    padding-top: 6rem
    background: darken($white, .5)
  main
    flex: 3
</style>
