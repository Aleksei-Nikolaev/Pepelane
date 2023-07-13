import {LoadingStatus} from "~/types/loadingStatus";

export const useHandleListAppearance = () => {
    const loadingStatus = ref<LoadingStatus>({
        dataIsLoaded: true,
        elementIsRemoved: true,
    });

    const renderItems = computed(() => {
        return (loadingStatus.value.dataIsLoaded && loadingStatus.value.elementIsRemoved)
    })

    const handleState = () => {
        loadingStatus.value.dataIsLoaded = false;
        loadingStatus.value.elementIsRemoved = false;
    };

    const elementIsRemoved = () => loadingStatus.value.elementIsRemoved = true


    return {
        handleState,
        elementIsRemoved,
        loadingStatus,
        renderItems,
    };


}

