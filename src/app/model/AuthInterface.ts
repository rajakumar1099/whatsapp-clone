export interface LoginInterface {
  phone_number: string;
}
export interface SignInInterface {
  display_name: string;
  phone_number: string;
  profile_image?: string;
  bio?: string;
}

export interface SignInResponse {
  message?: string;
  status: string;
  data?: ProfileInterface;
}

export interface LoginResponse {
  message?: string;
  status: string;
  data?: ProfileInterface;
}

export interface ProfileInterface {
  id: string;
  display_name: string;
  phone_number: string;
  profile_image: string | null;
  bio: string | null;
}

export interface ProfilesResponse {
  status: string;
  data: ProfileInterface[];
}
