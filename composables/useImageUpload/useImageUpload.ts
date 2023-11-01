import { ref } from 'vue'
const loading = ref<boolean>(false)

export const useImageUpload = () => {
  function getBase64 (file: File | undefined) {
    if (!file) { return }

    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const rejectLoading = () => {
    loading.value = false

    return loading.value
  }

  return {
    getBase64,
    loading,
    rejectLoading
  }
}
