import { useQuery, UseQueryResult } from "react-query";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import dayjs from "dayjs";

/* this endpoint has been taken from the RapidAPI website "Instagram"
   unfortunately it has limit for free trial 10 request per day
 */
// https://instagram28.p.rapidapi.com/user_info?user_name=instagram
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "df86917640mshcbdee007166b721p1d1d69jsn7ef34497f17d",
//     "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
//   },
// };

interface APIResponse {
  name: string;
  avatar: string;
  id: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  followersCount: number;
  followingCount: number;
}
const ENDPOINT = "http://3.127.244.173:5000/users/6504396be0c350cab60377ec";

const callAPIFunction = async (): Promise<APIResponse> => {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  console.log(data);
  // handle Date Code
  if (data.joinDate != null) {
    const dateObject = dayjs(data.joinDate.split("T")[0]);
    data.joinDate = dateObject;
    console.log(data.joinDate);
  }
  //
  return data;
};

export function useQueryFetchAPI(): UseQueryResult<APIResponse, Error> {
  return useQuery("getInfoKey", callAPIFunction, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });
}
