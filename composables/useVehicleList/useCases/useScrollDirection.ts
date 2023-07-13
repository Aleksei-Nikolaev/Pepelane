import {scrollDirection} from "~/constants/scrollDirection";
import {Ref} from "vue/dist/vue";
import {FilterParams} from "~/types/FilterParams";

export const useScrollDirection = (scrollDirectionClass: Ref<scrollDirection>) => {


    const changeScrollDirection = () => {
        scrollDirectionClass.value === scrollDirection.DOWN
            ? scrollDirectionClass.value = scrollDirection.UP
            : scrollDirectionClass.value =scrollDirection.DOWN
    };

    const defaultDirection = () => {
        if (scrollDirectionClass.value === scrollDirection.DOWN) return;
        changeScrollDirection();
    };

    return {
        changeScrollDirection,
        defaultDirection,
        scrollDirectionClass
    }
}
