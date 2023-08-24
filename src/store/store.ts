import { reactive } from "vue";
import type { UserPortfolio } from '../interfaces/userPortfolio';

interface Store {
    user: {
        data: UserPortfolio | undefined;
        isAuth: boolean;
        errorMessage?: string;
        hasError: boolean;
        isLoading: boolean;
    }
    startLoadingData: () => void;
    loadedUserData: (data: UserPortfolio) => void;
    loadUserDataFailed: (error: string) => void;
};

const store = reactive<Store>({

    user: {
        data: undefined,
        errorMessage: undefined,
        hasError: false,
        isAuth: false,
        isLoading: false,
    },

    startLoadingData: function(): void {
        this.user = {
            ...this.user,
            errorMessage: undefined,
            hasError: false,
            isLoading: true,
        }
    },
    loadedUserData: function(data: UserPortfolio): void {
        this.user = {
            ...this.user,
            data: data,
            errorMessage: undefined,
            hasError: false,
            isAuth: true,
            isLoading: false,
        }
    },

    loadUserDataFailed: function(error: string):void {
        this.user = {
            ...this.user,
            errorMessage: error,
            hasError: true,
            isAuth: false,
            isLoading: false,
        }
    }
});

export default store;