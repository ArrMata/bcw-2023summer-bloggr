import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {
    async getProfile(profileId) {
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log('profile', res.data)
        const profile = new Profile(res.data)
        AppState.activeProfile = profile
    }

}

export const profileService = new ProfileService()