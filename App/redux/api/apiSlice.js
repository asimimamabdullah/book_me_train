import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../app/auth/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "https://backend-bookmetrain-production.up.railway.app/api",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result?.error) {
		console.log("sending refresh token");
		// send refresh token to get new access token
		const refreshResult = await baseQuery("/refresh", api, extraOptions);
		// console.log(refreshResult);
		if (refreshResult?.data) {
			const user = api.getState().auth.user;
			// store the new token

			api.dispatch(setCredentials({ ...refreshResult.data, user }));
			// retry the original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	} else {
	}
	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
	// overrideExisting: true,
});
