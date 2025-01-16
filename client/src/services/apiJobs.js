import axios from "axios";
export async function getJobs() {
  const res = await axios.get("http://localhost:3000/api/v1/job/getjobs", {
    withCredentials: true,
  });
  if (res.data.success) {
    console.log(res.data);
    return res.data.jobs;
  } else {
    return undefined;
  }
}
