<template lang="pug">
  article
    div(v-for='(post, index) in contentPreview')

      p {{ index }}
      pre {{ post }}
</template>

<script>
export default {
  asyncData: async ({ app }) => ({
    contentPreview: await app.$content('/')
      .query({ exclude: [ 'body', 'anchors', 'meta', 'path' ] })
      .getAll()
  })
}
</script>
