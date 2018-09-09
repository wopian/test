<template lang="pug">
  p Placeholder
</template>

<script>
  export default {
    head () {
      return {
        title: `About - ${process.env.title}`,
        meta: [
          { hid: 'description', name: 'description', content: `About ${process.env.title}` }
        ]
      }
    }
  }
</script>
