<template lang='pug'>
  input(
    placeholder='Search…'
    ref='search'
    v-bind:class='{ transparent: !hasScrolled }'
    v-show='isIndexPage'
    v-model='keyword'
    @click='selectSearchText'
    @keyup.esc='resetSearch'
  )
</template>

<script>
  export default {
    data () {
      return {
        keyword: ''
      }
    },
    props: [
      'hasScrolled'
    ],
    computed: {
      isIndexPage () {
        return this.$nuxt.$route.name === 'index'
      }
    },
    methods: {
      resetSearch () {
        this.keyword = ''
        this.$refs.search.blur()
      },
      selectSearchText () {
        this.$refs.search.select()
      }
    },
    watch: {
      'keyword' () {
        if (this.keyword) this.$router.push({ name: 'index', query: { keyword: this.keyword } })
        else this.$router.push({ name: 'index' })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../styles/config'

  input
    margin-left: auto
    background: transparent
    border: 1px solid rgba($black, .2)
    border-radius: 999rem
    padding: 0 2rem
    color: $black
    max-width: 260px
    transition: color 200ms ease-out
    &:hover
      transition: color 100ms ease-in
    &:-webkit-input-placeholder
      color: $black
    &:focus
      outline: none
      border-radius: 999rem
      border: 1px solid rgba($black, .2)
    @include media-breakpoint-down(xs)
      &
        width: 100%
  
  .transparent
    border: 1px solid rgba($white, .2)
    color: $white
    &::-webkit-input-placeholder
      color: $white
    &:focus
      border: 1px solid rgba($white, .2)
</style>

<style lang="stylus">
  @import '../styles/config'

  header.transparent:hover
    .transparent
      border: 1px solid rgba($black, .2)
      color: $black
      &::-webkit-input-placeholder
        color: $black
</style>
