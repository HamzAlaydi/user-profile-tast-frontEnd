export interface FormData {
  name: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  followersCount: string;
  followingCount: string;
  uploadedFile: File | null;
}

export const initialFormData: FormData = {
  name: "Hamza",
  bio: "This is Hamza ALaydi bio lorem ipsum dolor sit amet consectetur adipisicing elit.",
  location: "Turkey",
  website: "www.hamzaalaydi.com",
  joinDate: "",
  followersCount: "99",
  followingCount: "60",
  uploadedFile: null,
};
