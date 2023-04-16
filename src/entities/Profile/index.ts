import ProfileCard from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/service/updateProfileData/updateProfileData';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export { IProfile, ProfileSchema } from './model/types/profile';

export { ProfileCard };

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
