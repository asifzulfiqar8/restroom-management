import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import getEnv from '../../config/config';

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: `${getEnv('SERVER_URL')}/api/auth`}),
    endpoints: (builder) => ({
        // sign up
        signup: builder.mutation({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
            }),
        }),
        // login
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            })
        })
    })
})

export const {useSignupMutation,useLoginMutation} = authApi;
export default authApi;