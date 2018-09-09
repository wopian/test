<template lang="pug">
  main
    jumbo-background(
      v-if='post.image'
      :image='post.image'
      :isPost='true'
    )
      .container
        h1 {{ toTitleCase(post.title) }}
        post-author(
          :author='post.author'
          :authorImage='post.authorImage'
          :date='post.date'
          :jumbo='true'
        )
    article.container
      nuxtent-body(:body='post.body')
      social-sharing(
        :url='`https://yannic.world/${this.$route.path}`'
        inline-template
      )
        .social
          network(network='twitter')
            img(src='/svg/twitter.svg')
            span Twitter
          network(network='facebook')
            img(src='/svg/facebook.svg')
            span Facebook
          network(network='googleplus')
            img(src='/svg/googleplus.svg')
            span Google+
          network(network='reddit')
            img(src='/svg/reddit.svg')
            span Reddit
</template>

<script>
  import JumboBackground from '~/components/JumboBackground'
  import PostAuthor from '~/components/PostAuthor'
  import { toTitleCase } from '../utils'

  export default {
    components: {
      JumboBackground,
      PostAuthor
    },
    asyncData: async ({ app, route, payload }) => ({
      post: payload || await app.$content('/').get(route.path)
    }),
    data () {
      return {
        toTitleCase
      }
    },
    head () {
      return {
        title: `${this.post.title} - ${process.env.title}`,
        meta: [
          { hid: 'description', name: 'description', content: this.post.synopsis || process.env.description }
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  h1
    color: $white
    line-height: 1.1
    font-size: 2rem
    position: relative
    text-align: center
    margin: 6rem auto 0 auto
    @include media-breakpoint-up(lg)
      &
        font-size: 2.5rem
    @include media-breakpoint-up(xl)
      &
        font-size: 3rem


  article
    margin-top: calc(30vh + 2rem)
</style>

<style lang="sass">
  @import '../styles/variables'

  article
    img
      max-width: 100%
    pre
      background: darken($white, 2)
      padding: .75rem
      border-radius: 1px
      border: 1px solid darken($white, 6)

  .social
    display: flex;
    overflow: hidden
    margin-top: 1.5rem
    > span
      padding: .75rem 1rem
      color: $white
      flex: 1 1 auto;
      text-align: center
      margin-right: 1rem
      border-radius: 1px
      cursor: pointer
      &:last-of-type
        margin-right: 0
      span
        margin-left: 1rem
      @include media-breakpoint-down(sm)
        span
          display: none
    span[data-link='#share-twitter']
      background: #41b7d8
    span[data-link='#share-facebook']
      background: #3b5997
    span[data-link='#share-googleplus']
      background: #d64937
    span[data-link='#share-reddit']
      background: #ff5700
    img
      color: $white
      width: 24px
      margin-top: -.15rem
</style>

