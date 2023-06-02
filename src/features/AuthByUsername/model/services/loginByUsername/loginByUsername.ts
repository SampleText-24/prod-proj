import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('common/loginByUsername', async (authData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;

    try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
            throw new Error();
        }
        dispatch(userActions.setAuthData(response.data));
        // если что то ломается то убери нахуй навигейт потом разберёшься
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
