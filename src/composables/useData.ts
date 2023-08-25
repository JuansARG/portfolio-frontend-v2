import { computed, watchEffect } from 'vue';
import { useQuery } from "@tanstack/vue-query"
import { getUserData } from '../helpers/getUserData';
import { initialUserData } from '../data/initialUserData';
import { login } from "@/helpers/login";
import store from "@/store/store";

export const useData = () => {

    const { isError } = useQuery({
        queryKey: ['data'],
        queryFn: async() => {
            store.startLoadingData();
            await login();
            return await getUserData();
        },
        select(data) {
            store.loadedUserData(data!);
        },
        cacheTime: 1000 * 180,
        retry: 1,
        refetchOnWindowFocus: false,
    });

    watchEffect(() => {
        if(isError.value) {
            store.loadedUserData(initialUserData);
            // store.loadUserDataFailed('¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.')
        }    
    })

    return {
        hasError: computed(() => store.user.hasError),
        isLoading: computed(() => store.user.isLoading),
        errorMessage: computed(() => store.user.errorMessage),
        data: computed(() =>  store.user.data)
    }
}