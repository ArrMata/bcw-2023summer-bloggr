<template>
<div class="container-fluid">
  <div class="row">
    <div v-for="blog in blogs" :key="blog.id" class="col-4">
      <BlogComponent :blog ="blog"/>
    </div>

  </div>
</div>


</template>

<script>
import Pop from '../utils/Pop';
import{blogsService} from '../services/BlogsService';
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import BlogComponent from '../components/BlogComponent.vue';
export default {
    setup() {
        onMounted(() => {
            getBlogs();
        });
        async function getBlogs() {
            try {
                await blogsService.getBlogs();
            }
            catch (error) {
                Pop.error(error.message);
            }
        }
        return {
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogComponent }
}
</script>

<style scoped lang="scss">
</style>
