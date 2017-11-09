<template>
    <tableArticle v-bind:article="article"></tableArticle>
</template>
<script>
  import tableArticle from '@/components/ArticleTable'
  export default {
    data: function () {
      return {
        article: []
      }
    },
    methods: {
      get_all () {
        this.$http.get('/article')
        .then(({data}) => {
          this.article = data
        })
        .catch(err => {
          console.errors(err)
        })
      }
    },
    mounted: function () {
      this.get_all()
    },
    components: {
      tableArticle
    }
  }
</script>