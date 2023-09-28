import {Rule} from "ant-design-vue/es/form";
import {
    isInteger,
    isNumber,
    isNumberLessThan,
    isNotEmpty,
    isStrLengthMoreThan,
    isStartWithLetter
} from "~/utils/common/helpers";
import {handleFormReject} from "~/utils/vendors/antd/handleFormReject";
import {ref} from 'vue';
import {ImageUploadState} from "~/types/vendors/antd/ImageUploadStatus";
import {initStateFactory} from "~/factories/initStateFactory";


export const useAddVehicleValidation = () => {
    const {t} = useI18n()

    const {createImgUploadState} = initStateFactory()

    const imageUploadStatus = ref<ImageUploadState>(createImgUploadState())

    const maxRentValue = 10000
    const minNameLength = 4
    const minDescriptionLength = 10
    const imgMaxSize = 1
    const regexLetter = /^[A-Za-z]/

    const localesPath = {
        rent: "addVehicleModal.form.rejectMessage.rent",
        name: "addVehicleModal.form.rejectMessage.name",
        description: "addVehicleModal.form.rejectMessage.description",
        image: "addVehicleModal.form.rejectMessage.image",
    }
    const checkRent = async (_rule: Rule, value: number) => {
        if (isNotEmpty(value)) return handleFormReject(t(`${localesPath.rent}.default`))
        if (isNumber(value)) return handleFormReject(t(`${localesPath.rent}.digits`))
        if (isInteger(value)) return handleFormReject(t(`${localesPath.rent}.integer`))
        if (isNumberLessThan(value, maxRentValue)) return handleFormReject(t(`${localesPath.rent}.hugeNumber`, {maxRentValue}))

        return Promise.resolve();
    };

    const checkName = async (_rule: Rule, value: string) => {
        if (isNotEmpty(value)) return handleFormReject(t(`${localesPath.name}.default`))
        if (isStartWithLetter(value, regexLetter)) return handleFormReject(t(`${localesPath.name}.firstIsLetter`))
        if (isStrLengthMoreThan(value, minNameLength)) {
            return handleFormReject(t(`${localesPath.name}.smallLength`, {minNameLength}))
        }

        return Promise.resolve();
    };

    const checkDescription = async (_rule: Rule, value: string) => {
        if (isNotEmpty(value)) return handleFormReject(t(`${localesPath.description}.default`))
        if (isStrLengthMoreThan(value, minDescriptionLength)) {
            return handleFormReject(t(`${localesPath.description}.smallLength`, {minDescriptionLength}))
        }

        return Promise.resolve();
    };


    const checkImage = async () => {
        const {isImage, isSize, fileUploadStatus} = imageUploadStatus.value

        if (fileUploadStatus === "removed") {
            return handleFormReject(t(`${localesPath.image}.default`, {imgMaxSize}))
        }

        if (!isImage) {
            return handleFormReject(t(`${localesPath.image}.isNotImage`))
        }

        if (!isSize) {
            return handleFormReject(t(`${localesPath.image}.hugeFileSize`, {imgMaxSize}))
        }

        if (fileUploadStatus !== "done") {
            return handleFormReject(t(`${localesPath.image}.default`, {imgMaxSize}))
        }

        return Promise.resolve();
    }

    const rules: Record<string, Rule[]> = {
        name: [{ validator: checkName, trigger: 'change'}],
        description: [{ validator: checkDescription, trigger: 'change'}],
        rent: [{ validator: checkRent, trigger: 'change'}],
        isImage: [{ validator: checkImage, trigger: 'change'}],
    };



    return {
        rules,
        imageUploadStatus,
        imgMaxSize
    }
}