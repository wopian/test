<template lang='pug'>
  input(
    placeholder='Search…'
    ref='search'
    :class='{ transparent: !hasScrolled }'
    v-show='isIndexPage'
    v-model='keyword'
    @click='selectSearchText'
    @keyup.esc='resetSearch'
  )
</template>

<script>
  export default {
    props: {
      hasScrolled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        keyword: this.$route.query.keyword || ''
      }
    },
    computed: {
      isIndexPage () {
        return this.$nuxt.$route.name === 'index'
      }
    },
    watch: {
      'keyword' () {
        if (this.keyword) this.$router.push({ name: 'index', query: { keyword: this.keyword } })
        else this.$router.push({ name: 'index' })
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
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  input
    height: 2.375rem
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

<style lang="sass">
  @import '../styles/variables'

  header.transparent:hover
    .transparent
      border: 1px solid rgba($black, .2)
      color: $black
      &::-webkit-input-placeholder
        color: $black
</style>
