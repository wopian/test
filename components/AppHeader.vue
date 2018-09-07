<template lang="pug">
  header.navbar.navbar-light.fixed-top(v-bind:class='{ transparent: !hasScrolled }')
    nav.nav.container
      router-link.navbar-brand.mb-0(v-bind:to='{ name: "index" }')  {{ appTitle }}
        span(v-if='dev') Dev
      search(v-bind:hasScrolled='hasScrolled')
</template>

<script>
import Search from '~/components/Search'

export default {
  components: {
    Search
  },
  data () {
    return {
      appTitle: process.env.appTitle,
      hasScrolled: false
    }
  },
  props: [
    'dev'
  ],
  methods: {
    handleScroll () {
      if (process.browser) this.hasScrolled = window.scrollY > 0
    }
  },
  created () {
    if (process.browser) window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  header
    background: rgba($white, .95)
    transition: background 400ms ease-out
    height: 5rem
    justify-content: center
    &:hover
      .navbar-brand
        color: darken($black, 2)
      a
        color: rgba(darken($black, 2), .7)
    &:not(.transparent)
      border-bottom: 1px solid rgba($black, .05)

  nav
    @include media-breakpoint-down(xs)
      &
        margin: 0

  .navbar-brand
    padding-left: 15px
    color: $black
    font-weight: 700
    &:hover
      color: darken($black, 2)
    span
      font-weight: 400

  a
    transition: color 200ms ease-out
    &:hover
      transition: color 100ms ease-in

  .transparent
    background: transparent
    &:hover
      background: rgba($white, .95)
    .navbar-brand,
    a
      color: $white
</style>
