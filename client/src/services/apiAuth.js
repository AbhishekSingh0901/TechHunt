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
    console.log(res.data);
    return res.data;
  } else {
    throw new Error(res.data.message);
  }
}

export async function getUser() {
  const res = await axios.get("http://localhost:3000/api/v1/user/get-profile", {
    withCredentials: true,
  });
  if (res.data.success) {
    return res.data.user;
  } else {
    throw new Error(res.data.message);
  }
}
