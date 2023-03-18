import ProfileCard from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export { IProfile, ProfileSchema } from './model/types/profile';

export { ProfileCard };
