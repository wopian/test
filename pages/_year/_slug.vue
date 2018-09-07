<template lang="pug">
  article.content-container
    h1 {{ post.title }}
    pre {{ post }}
    nuxtent-body(:body='post.body')
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    post: payload || await app.$content('/').get(route.path)
  })
}
</script>
