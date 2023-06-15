import {IVehicle} from "~/types/vehicle";

const getData = async (url: string) => {
    try {
        return await fetch(url).then((res) => res.json())
    } catch  (e) {
        alert('Все плохо с сервером')
    }
}