import axios from "axios";

export async function loginUser(data) {
  const res = await axios.post(
    "http://localhost:3000/api/v1/user/login",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  if (res.data.success === true) {
    return res.data;
  } else {
    throw new Error(res.data.message);
  }
}

export async function getUser() {
  console.log("running");
  const res = await axios.get("http://localhost:3000/api/v1/user/get-profile", {
    withCredentials: true,
  });
  if (res.data.success) {
    return res.data.user;
  } else {
    return undefined;
  }
}

export async function logoutUser() {
  const res = await axios.get("http://localhost:3000/api/v1/user/logout", {
    withCredentials: true,
  });
  if (res.data.success) {
    return res.data;
  } else {
    throw new Error(res.data.message);
  }
}

export async function registerUser(data) {
  const res = await axios.post(
    "http://localhost:3000/api/v1/user/register",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  if (res.data.success) {
    return res.data;
  } else {
    throw new Error(res.data.message);
  }
}
