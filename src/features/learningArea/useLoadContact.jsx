import { useQuery, useQueryClient } from "@tanstack/react-query";
import { loadContact } from "./ContactApi";

export function useLoadContact() {
  const queryClient = useQueryClient();

  const {
    isLoading: isLoadingContact,
    data,
    error,
  } = useQuery({
    queryKey: ["contact"],
    queryFn: loadContact,
  });

  return { data, isLoading: isLoadingContact, error };
}
