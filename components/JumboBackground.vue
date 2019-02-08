<template lang="pug">
  .jumbo-background(
    :style='`background-image: url(${image})`'
    :class='{ isPost }'
  )
    slot
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        default: ''
      },
      isPost: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  .jumbo-background
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 70vh
    width: 100%
    background-size: cover
    background-position: 50% 80%
    clip-path: polygon(0 0, 100% 0, 100% 66vh, 50% 100%, 0 66vh)
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: rgba($black, .5)
      z-index: -1
    &.isPost
      height: 30vh
      background-position: 50% 26%;
      clip-path: polygon(0 0, 100% 0, 100% 26vh, 50% 100%, 0 26vh)
</style>
