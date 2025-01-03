import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useSignUpUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: register, isLoading } = useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: (user) => {
      queryClient.setQueryData("user", user);
      toast.success("registered successfully !");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { register, isLoading };
}
