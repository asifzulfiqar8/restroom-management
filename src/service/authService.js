import { callAuth } from "../helper/apiHelper";
import { setProfile } from "../redux/reducers/authSlice";

export const SignUp = async (request) => {
  try {
    const response = await callAuth("/api/auth/signup", "POST", request);

    return response;
  } catch (error) {
    console.error("Error in SignUp:", error);
    throw error;
  }
};

export const SignIn = async (request) => {
  try {
    const response = await callAuth("/api/auth/login", "POST", request);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUserProfile = async () => {
    try {
      const response = await callAuth("/api/auth/profile", "GET", {
        withCredentials: true,
      });
  
      if (response && response.user) {
        return response.user;
      } else {
        console.error("Unexpected response structure:", response);
        return null;
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error; 
    }
  };


  
  export const editUserProfile = async (updatedProfileData) => {
    try {
        const response = await callAuth("/api/auth/edit-profile", "PUT", updatedProfileData);

        if (response && response.user) {
            return response.user; 
        } else {
            console.error("Unexpected response structure:", response);
            return null;
        }
    } catch (error) {
        console.error("Error editing profile:", error);
        throw error; 
    }
};


export const changePassword = async (passwordData) => {
  try {
      const response = await callAuth("/api/auth/change-password", "PUT", passwordData);

      if (response && response.success) {
          return response.message;
      } else {
          console.error("Unexpected response structure:", response);
          return null;
      }
  } catch (error) {
      console.error("Error changing password:", error);
      throw error; 
  }
};
