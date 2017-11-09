<template>
    <div class="col-md-8">
    <router-link class="btn btn-default" :to="'/article_add'">Add article</router-link>
        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                <th>No</th>
                <th>Title</th>
                <th>Content</th>
                <th>Author</th>
                <th>Image</th>
                <th colspan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i,no) in article">
                <td>{{no+1}}</td>
                <td>{{i.title}}</td>
                <td>{{i.content}}</td>
                <td>{{i.author}}</td>
                <td><img v-bind:src="i.image" v-bind:alt="i.title"></td>
                <td><router-link class="btn btn-default" :to="{name:'edit',params:{id: article.id}}">Edit</router-link></td>
                <td><router-link class="btn btn-default" :to="'/article/delete/'+i._id">Delete</router-link></td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    export default {
      props: ['article']
    }
</script>