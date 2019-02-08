<template lang="pug">
  .author(:class='{ jumbo }')
        img(v-if='authorImage' :src='authorImage')
        div
          span {{ author || 'Unknown' }}
          time(
            pubdate='pubdate'
            :datetime='formatDate(date)'
            :title='formatDate(date)'
        ) {{ timeAgo(date) }}
</template>

<script>
  import { formatDate, timeAgo } from '../utils'

  export default {
    props: {
      authorImage: {
        type: String,
        default: ''
      },
      author: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      },
      jumbo: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        formatDate,
        timeAgo
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  .author
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-items: flex-start
    color: $white
    margin: .5rem auto 0
    img
      width: 2.5rem
      border-radius: 999rem
      margin-right: .5rem
    div
      display: inline-block
      width: auto
      height: 2.5rem
      display: flex
      flex-direction: column
      justify-content: center
    span
      display: block
      color: $white
    time
      display: block
      font-size: .75rem
      color: rgba($white, .5)
      margin-top: -.5rem
    &:not(.jumbo)
      justify-content: flex-start
      margin: 1rem auto 0
      span
        color: darken($primary, 6)
      time
        color: rgba($black, .5)
</style>
