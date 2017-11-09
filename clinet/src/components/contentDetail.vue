<template>
    <h2>{{article.title}}</h2>
</template>
<script>
  export default {
    props: ['id'],
    data: function () {
      return {
        article: {}
      }
    },
    methods: {
      getById (id) {
        this.$http.get('/article/' + id)
        .then(({data}) => {
          console.log(data)
          this.article = data
        })
        .catch(err => {
          console.errors(err)
        })
      }
    },
    mounted: function () {
      this.getById(this.id)
    },
    watch: {
      id (newId) {
        this.getById(newId)
      }
    }
  }
</script>