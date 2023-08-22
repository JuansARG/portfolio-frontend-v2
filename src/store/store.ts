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
    startLoadingData: () => Promise<void>;
    loadedUserData: (data: UserPortfolio) => void;
    loadUserDataFailed: (error: string) => void;
};

const store = reactive<Store>({

    user: {
        data: undefined,
        isAuth: false,
        errorMessage: undefined,
        hasError: false,
        isLoading: false,
    },

    startLoadingData: async function(): Promise<void> {
        this.user = {
            ...this.user,
            isAuth: false,
            errorMessage: undefined,
            hasError: false,
            isLoading: true,
        }
    },
    loadedUserData: function(data: UserPortfolio): void {
        this.user = {
            ...this.user,
            data,
            isAuth: true,
            hasError: false,
            isLoading: false,
        }
    },

    loadUserDataFailed: function(error: string):void {
        this.user = {
            ...this.user,
            isAuth: false,
            errorMessage: error,
            hasError: true,
            isLoading: false,
        }
    }
});

store.startLoadingData();

export default store;