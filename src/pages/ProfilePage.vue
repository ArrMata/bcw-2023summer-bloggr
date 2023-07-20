<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                {{profile.name}}
            </div>
            <div>
                <img :src="profile.picture" :alt="profile.name">
            </div>
            
        </div>
    </div>
</template>

<script>
import Pop from '../utils/Pop';
import {profileService} from '../services/ProfileServcie'
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';

export default {


    setup() {

        const route = useRoute()

        onMounted(()=> {
            getProfile()
        })

        async function getProfile() {
            try {
                await profileService.getProfile(route.params.profileId)

            
            } catch (error) {
                Pop.error(error.message)
            }
        }

        return {
            getProfile,
            profile: computed(() => AppState.activeProfile)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>