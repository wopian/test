<template lang="pug">
  article
    jumbo-background(
      v-if='post.image'
      :image='post.image'
      :isPost='true'
    )
      h1 {{ toTitleCase(post.title) }}
      post-author(
        :author='post.author'
        :authorImage='post.authorImage'
        :date='post.date'
        :jumbo='true'
      )
    pre {{ post }}
    nuxtent-body(:body='post.body')
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
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/variables'

  h1
    color: $white
    font-size: 2rem
    position: relative
    text-align: center
    margin-top: 6rem
    @include media-breakpoint-up(sm)
      &
        font-size: 3rem
    @include media-breakpoint-up(lg)
      &
        font-size: 4rem
</style>

