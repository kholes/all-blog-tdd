<template>
<div class="col-md-8">
<form class="form-horizontal">
  <fieldset>
    <legend>Add article</legend>
    <div class="form-group">
      <label for="title" class="col-lg-2 control-label">Title</label>
      <div class="col-lg-10">
        <input type="text" v-model="title" class="form-control" id="title" placeholder="Title">
      </div>
    </div>
    <div class="form-group">
      <label for="content" class="col-lg-2 control-label">Content</label>
      <div class="col-lg-10">
        <textarea v-model="content" class="form-control" rows="3" id="content"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label for="image" class="col-lg-2 control-label">Image URL</label>
      <div class="col-lg-10">
        <input type="text" v-model="image" class="form-control" id="image" placeholder="Title">
      </div>
    </div>
    <div class="form-group">
      <label for="author" class="col-lg-2 control-label">Author</label>
      <div class="col-lg-10">
        <input type="author" v-model="author" class="form-control" id="author" placeholder="Title">
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="reset" class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </fieldset>
</form>
</div>
</template>
<script>
    export default {
      data: function () {
        input: {
          title:'',
          content:'',
          author:'',
          image:''
        } 
      } 
    }
</script>