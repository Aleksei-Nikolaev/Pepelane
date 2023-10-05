import {reactive, ref} from 'vue';
import type {FormInstance} from 'ant-design-vue';
import {UserVehicle} from "~/types/userVehicle";
import {useAddVehicleValidation} from "~/composables/useAddVehicleModal/useCases/useAddVehicleValidation";
import {useHandleVehiclesTypes} from "~/composables/useHandleVehiclesApi/useHandleVehiclesTypes";
import {useAddVehicleFormFactory} from "~/composables/useAddVehicleModal/factories/useAddVehicleFormFactory";
import {$api} from "~/plugins/api";
import {createVehicleRequestBody} from "~/services/types/vehicles";
import {pipe} from "fp-ts/function"

export const useAddVehicleForm = () => {
    const {create} = useAddVehicleFormFactory()

    const formRef = ref<FormInstance>();
    const userVehicleData = ref<UserVehicle>(create())

    const {vehicleTypes} = useHandleVehiclesTypes()

    const selectRef = ref<HTMLImageElement | null>(null);

    const {imageUploadStatus, rules} = useAddVehicleValidation()


    const handleImageData = (base64: string) => {
        userVehicleData.value.image = base64
    }

    const onImgRemoved = () => {
        imageUploadStatus.value.isImage = null;
        imageUploadStatus.value.isSize = null;
    }

    const normalizePayLoad = (form: UserVehicle): createVehicleRequestBody => {
        return {
            name: form.name ?? '',
            description: form.description ?? '',
            rent: form.rent ? Number(form.rent) : null,
            image: form.image ?? '',
            type: form.type ?? '',
        }
    }


    const onFinish = async () => {
        const payLoad = pipe(
            userVehicleData,
            unref,
            normalizePayLoad,
        )
        const res = await $api.vehicleService.createVehicle(payLoad)

        console.log(res)
    }

    return {
        formRef,
        userVehicleData,
        vehicleTypes,
        selectRef,
        imageUploadStatus,
        rules,
        handleImageData,
        onImgRemoved,
        onFinish
    }
}