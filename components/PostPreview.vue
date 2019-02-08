<template lang="pug">
  .col.col-12.col-md-6.col-lg-4
    nuxt-link.post(
      :class='{ jumbo }'
      :to='post.permalink'
    )
      img.thumbnail(
        v-if='!jumbo'
        :src='post.image'
      )
      .title {{ toTitleCase(post.shortTitle || post.title) }}
      p(v-if='post.synopsis') {{ post.synopsis }}
      post-author(
        :author='post.author'
        :authorImage='post.authorImage'
        :date='post.date'
        :jumbo='jumbo')
</template>

<script>
  import PostAuthor from './PostAuthor'
  import { formatDate, timeAgo, toTitleCase } from '../utils'

  export default {
    components: {
      PostAuthor
    },
    props: {
      post: {
        type: Object,
        default: () => {}
      },
      jumbo: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        formatDate,
        timeAgo,
        toTitleCase
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  .col:not(:last-of-type)
    margin-bottom: 1rem

  .col:first-of-type
    margin-top: 10vh
    min-width: 100%

  .title
    font-size: 2rem
    font-weight: 700

  .thumbnail
    width: 100%

  .post
    display: block
    text-decoration: none
    color: $black
    > img
      border-radius: 1px
      height: 14rem
      object-fit: cover
      background: rgba($black, .2)
    .title
      color: $black
      font-size: 24px
      letter-spacing: -.02rem
      display: block
      margin-top: .75rem
      margin-bottom: .25rem
    p
      margin-bottom: .5rem

  .jumbo
    height: calc(70vh - 10rem)
    min-width: 100%
    margin-top: 7.5vh
    @include media-breakpoint-up(sm)
      &
        margin-top: 10vh
    .title
      text-align: center
      display: block
      color: $white
      font-size: 2rem
      @include media-breakpoint-up(sm)
        &
          font-size: 3rem
      @include media-breakpoint-up(lg)
        &
          font-size: 4rem
    p
      color: $white
      width: 75%
      text-align: center
      margin: 0 auto
      font-size: 1.05rem
</style>
