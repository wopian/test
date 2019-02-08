<template lang="pug">
  header.navbar.navbar-light.fixed-top(:class='{ transparent: !hasScrolled }')
    nav.nav.container
      nuxt-link.navbar-brand.mb-0(:to='{ name: "index" }')  {{ appTitle }}
      .navbar-nav
        nuxt-link.nav-item.nav-link(:to='{ name: "about" }') About
      search(:hasScrolled='hasScrolled')
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
    created () {
      if (process.browser) window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        if (process.browser) this.hasScrolled = window.scrollY > 0
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  .nav-link
    font-weight: 500

  .transparent
    background: transparent
    &:hover
      background: rgba($white, .95)
      .navbar-brand,
      .nav-link,
      a
        color: darken($black, 2)
    .navbar-brand,
    &.navbar-light a
      color: $white

  header
    background: rgba($white, .95)
    transition: background 400ms ease-out
    height: 5rem
    &:hover
      .navbar-brand
      .nav-link,
      a
        color: darken($black, 2)
    &:not(.transparent)
      border-bottom: 1px solid rgba($black, .05)

  nav
    @include media-breakpoint-down(xs)
      &
        margin: 0

  .navbar-nav
    align-items: self-start
    flex: 1 0

  .navbar-brand
    padding-left: 15px
    color: $black
    font-weight: 700
    &:hover
      color: darken($black, 2)

  a
    transition: color 200ms ease-out
    &:hover
      transition: color 100ms ease-in
</style>
