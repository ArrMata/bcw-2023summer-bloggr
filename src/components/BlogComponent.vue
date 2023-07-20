<template>
    <div >
        <img class="img-fluid" :src="blog.imgUrl" :alt="blog.title" @click="setActiveBlog()" data-bs-toggle="modal" data-bs-target="#modalId">
    </div>
</template>

<script>
import { Blog } from '../models/BlogModel';
import { blogsService } from '../services/BlogsService';

export default {

    props: {blog: {type: Blog, required: true}},


    setup (props) {
        
        function setActiveBlog() {
            blogsService.setActiveBlog(props.blog)
        }

        return {
setActiveBlog

        }
    }
}
</script>

<style lang="scss" scoped>

</style>