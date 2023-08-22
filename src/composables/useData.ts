import { useQuery } from "@tanstack/vue-query"
import { getUserData } from '../helpers/getUserData';
import { initialUserData } from '../data/initialUserData';
import { login } from "@/helpers/login";

export const useData = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: getUserData,
        initialData: initialUserData,
        onError: () => login()
    });

    return {
        data,
        isLoading,
    }
}