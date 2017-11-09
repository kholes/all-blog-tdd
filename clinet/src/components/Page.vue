<template>
    <div class="container">
        <div class="row">
            <sidebar v-bind:article="article"></sidebar>
            <router-view/>
        </div>
    </div>
</template>
<script>
import sidebar from '@/components/Sidebar'
export default {
  data: function () {
    return {
      article: []
    }
  },
  methods: {
    get_all () {
      this.$http.get('article')
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
    this.get_all()
  },
  components: {
    sidebar
  }
}
</script>