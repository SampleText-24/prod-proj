import { UserRole } from './model/consts/userConsts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';

export {
    userReducer,
    userActions,
    UserRole,
    getUserAuthData,
    getUserMounted,
};

export type {
    UserSchema,
    User,
};
