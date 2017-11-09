<template>
    <div class="col-md-3">
      <ul>
        <li v-for="i in article"><router-link :to="'/blog/' + i._id">{{i.title}}</router-link></li>
      </ul>
    </div>
</template>
<script>
  export default {
    props: ['article']
  }
</script>