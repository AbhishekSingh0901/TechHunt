import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLoginUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (user) => {
      queryClient.setQueryData("user", user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { login, isLoading };
}
