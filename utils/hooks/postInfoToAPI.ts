import {
  useMutation,
  UseMutationResult,
  UseMutationOptions,
} from "react-query";

// the endpoint is only for one user so there is no harm in hardcoding it.
const ENDPOINT = "http://3.127.244.173:5000/users/6504396be0c350cab60377ec";
interface Payload {
  name: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  followersCount: string;
  followingCount: string;
}

const postAPIFunction = async (payload: Payload): Promise<any> => {
  const response = await fetch(ENDPOINT, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      bio: payload.bio,
      location: payload.location,
      website: payload.website,
      joinDate: payload.joinDate,
      followersCount: payload.followersCount,
      followingCount: payload.followingCount,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export function usePostAPI(
  options?: UseMutationOptions<any, Error, Payload>
): UseMutationResult<any, Error, Payload> {
  return useMutation(postAPIFunction, options);
}
