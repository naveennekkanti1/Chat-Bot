import axios from "axios";
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/user/signup", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  try {
    const res = await axios.post("/chat/new", { message });
    if (res.status !== 200) {
      throw new Error("Received non-200 status code");
    }
    return res.data;
  } catch (error) {
    console.error("Error sending chat request:", error);
    throw new Error("Unable to send chat");
  }
};

export const getUserChats = async () => {
  try {
    const res = await axios.get("/chat/all-chats");
    if (res.status !== 200) {
      throw new Error("Unable to fetch chats");
    }
    const data = await res.data;
    
    // Ensure data.chats is an array
    if (!Array.isArray(data.chats)) {
      throw new Error("Chats data is not in the expected format");
    }
    
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error fetching chats: " + error.message);
    } else {
      throw new Error("An unknown error occurred while fetching chats.");
    }
  }
};


export const deleteUserChats = async () => {
  const res = await axios.delete("/chat/delete");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
