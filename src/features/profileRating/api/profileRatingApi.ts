import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetProfileRatingArg {
    userId: string;
    profileId: string;
}

interface RateProfileArg {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArg>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, RateProfileArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = articleRatingApi.useGetProfileRatingQuery;
export const useRateProfile = articleRatingApi.useRateProfileMutation;
