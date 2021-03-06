<template lang="pug">
  main
    jumbo-background(
      v-if='list && filteredList[0]'
      :image='filteredList[0].image'
    )
    .container
      .row(v-if='list')
        post-preview(
          v-for='(post, index) in filteredList'
          :key='post.permalink'
          :post='post'
          :jumbo='index === 0'
        )
      .row(v-else)
        p No posts found
</template>

<script>
  import Fuse from 'fuse.js'
  import JumboBackground from '~/components/JumboBackground'
  import PostPreview from '~/components/PostPreview'

  export default {
    components: {
      JumboBackground,
      PostPreview
    },
    asyncData: async ({ app }) => ({
      list: await app.$content('/')
        .query({ exclude: [ 'body', 'anchors', 'meta', 'path' ] })
        .getAll()
    }),
    data () {
      return {
        appTitle: process.env.appTitle,
        hasScrolled: false
      }
    },
    computed: {
      filteredList () {
        // Input from Search component
        let keyword = (this.$route.query.keyword || '').toLowerCase()
        // Fuzzy match title, content and author
        let fuse = new Fuse(this.list, {
          shouldSort: true,
          threshold: 0.7,
          location: 0,
          distance: 1000,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            'author',
            'content',
            'title'
          ]
        })
        // Sort by publish date (desc)
        const unsortedList = this.list
        let sortDate = unsortedList.sort((a, b) => (new Date(b.date) - new Date(a.date)))

        // Fallback to a date ordered list if no keyword set, else fuzzy match the keyword
        return keyword === '' ? sortDate : fuse.search(keyword)
      }
    }
  }
</script>
