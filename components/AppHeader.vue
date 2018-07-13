<template lang="pug">
  header.navbar.navbar-light.fixed-top
    nav.nav.container
      router-link.navbar-brand.mb-0(v-bind:to='{ name: "index" }')  {{ title }}
        span(v-if='dev') Dev
      search
</template>

<script>
import Search from './Search'

export default {
  components: {
    // Search
  },
  data () {
    return {
      title: process.env.title
    }
  },
  props: [
    'dev'
  ]
}
</script>

<style lang="stylus" scoped>
  @import '../styles/config'

  header
    background: rgba($white, .95)
    height: 5rem
    justify-content: center
    &:hover
      .navbar-brand
        color: darken($black, 2)
      a
        color: rgba(darken($black, 2), .7)

  nav
    @include media-breakpoint-down(xs)
      &
        margin: 0
</style>
