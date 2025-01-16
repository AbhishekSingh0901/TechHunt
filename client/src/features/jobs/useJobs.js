import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";

export function useJobs() {
  const { isLoading, data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  return { isLoading, jobs };
}
