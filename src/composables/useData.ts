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
            console.log('refetch ?')
            store.startLoadingData();
            await login();
            return await getUserData();
        },
        initialData: initialUserData,
        select(data) {
            store.loadedUserData(data);
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    watchEffect(() => {
        if(isError.value) {
            store.loadUserDataFailed('¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.')
        }    
    })

    return {
        hasError: computed(() => store.user.hasError),
        isLoading: computed(() => store.user.isLoading),
        errorMessage: computed(() => store.user.errorMessage),
        data: computed(() =>  store.user.data)
    }
}