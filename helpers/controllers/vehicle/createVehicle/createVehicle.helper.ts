import { v4 as uuidv4 } from 'uuid'
import { createVehicleRequestBody } from '~/services/types/vehicles'
import { VehicleModel } from '~/models/vehicle.model'

export const createVehicleHelper = (vehicleData: createVehicleRequestBody) => {
  const normalizeVehicleData = (): VehicleModel => {
    return {
      ...vehicleData,
      id: uuidv4(),
      preview: vehicleData.image,
      specifications_text:
        'Culpa veniam aliquip aute ut ea. Cupidatat Lorem tempor aliqua enim consectetur voluptate ullamco reprehenderit laboris cupidatat exercitation. Consequat laboris qui nulla culpa cupidatat ea eu sunt.\n\nAute est ad Lorem incididunt aute eu Lorem laborum labore reprehenderit. Velit esse deserunt nostrud ipsum ex deserunt ex fugiat sint ipsum. Duis pariatur nulla amet quis eu occaecat sit eu voluptate duis. Eiusmod et eiusmod voluptate dolor nisi. Enim aliqua dolor Lorem eiusmod voluptate nostrud do quis quis tempor non. Pariatur dolore excepteur nisi eiusmod ipsum. Magna fugiat anim officia minim ea in officia adipisicing consectetur minim nisi.',
      team_text:
        'Sint cupidatat aliqua eiusmod labore Lorem ullamco sint nulla velit mollit dolore labore. Voluptate ullamco consequat adipisicing deserunt ex ullamco qui irure enim eiusmod sint enim. Dolore minim reprehenderit amet sit ipsum consectetur ea pariatur id esse Lorem. Ullamco mollit consectetur tempor dolor esse qui adipisicing consequat sint aute nisi dolore sint deserunt. Ad anim cillum duis eu commodo qui ex eu nostrud ad quis sint minim laborum.',
      term_text:
        'Minim ea exercitation do tempor. Reprehenderit et pariatur in quis voluptate et eu aute irure proident Lorem commodo eiusmod proident. Tempor ullamco in qui est amet cupidatat proident eiusmod adipisicing ipsum magna aliquip exercitation. Nostrud culpa mollit qui adipisicing exercitation. Sunt culpa aliquip ad irure officia esse excepteur ad eiusmod. Consequat est esse irure ea. Amet sit minim occaecat mollit commodo dolore ipsum ad officia occaecat officia consectetur nostrud.\n\nDo eu eu deserunt velit adipisicing est cupidatat aute deserunt Lorem sint nulla laborum. In consequat amet mollit culpa adipisicing. Ut est sit aute quis eu dolor est. Id cupidatat id ad ut quis ipsum est mollit nulla fugiat occaecat magna.\n\nAdipisicing tempor et adipisicing veniam dolor occaecat nostrud labore culpa adipisicing eu cupidatat et. Do ullamco amet adipisicing reprehenderit quis. Labore officia ad proident ex do amet Lorem fugiat pariatur consectetur nostrud eu laborum sunt.'
    }
  }
  return {
    normalizeVehicleData
  }
}
