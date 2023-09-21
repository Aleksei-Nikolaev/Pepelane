<script setup lang="ts">
import {Events, ref} from 'vue'
import { useDropZone } from '@vueuse/core'

const filesData = ref<{ name: string; size: number; type: string; lastModified: number }[]>([])

const imageContainer = ref<HTMLElement>()
const dropZoneRef = ref<HTMLElement>()
const value = ref()

const handleFile = (file: File) => {
  if (file.type.startsWith('image/')) {
    console.log(file)
    const filesData = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }
    console.log(filesData.name)
    const imageUrl = URL.createObjectURL(file);
    const image = ref(document.createElement('img'));
    image.value.src = imageUrl;
    imageContainer.value?.appendChild(image.value)
  } else {
    alert('Выбранный файл не является изображением.');
  }
}

const onAddFile = (event: any) => {
  console.log(event)
}

const onDrop = (files: File[] | null) => {
   if (files) {
     const file = files[0]
     handleFile(file)
   }
}


// const onDrop = (files: File[] | null) => {
//   filesData.value = []
//   if (files) {
//     filesData.value = files.map(file => ({
//       name: file.name,
//       size: file.size,
//       type: file.type,
//       lastModified: file.lastModified,
//     }))
//     const file = files[0]
//     if (file.type.startsWith('image/')) {
//       const imageUrl = URL.createObjectURL(file);
//       const image = ref(document.createElement('img'));
//       image.value.src = imageUrl;
//       imageContainer.value?.appendChild(image.value)
//     } else {
//       alert('Выбранный файл не является изображением.');
//     }
//   }
// }


useDropZone(dropZoneRef, onDrop)

</script>

<template>
  <div ref="dropZoneRef">
    <div class="drop-zone" ref="imageContainer">
      <label class="drop-zone__button">
        <input
            ref="input"
            type="file"
            accept="image/*"
            class="biba"
            required
        />
<!--        <nuxt-icon name="image_upload" class="drop-zone__icon" filled/>-->
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.drop-zone {
  width: 100%;
  height: 350px;
  border-color: black;
  background-color: var(--base_50);
  border-radius: var(--border_radius_small);
  display: flex;
  justify-content: center;
  align-items: center;

  &__button {
    cursor: pointer;
    border-radius: var(--border_radius_tiny);
    background: var(--base_0);
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 12px 12px;
    z-index: 3;
  }

  &__icon {
    color: var(--main_400);
  }
}

:deep(.drop-zone > img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border_radius_small);
  z-index: 2;
}

input {
  z-index: 3;
}

label.drop-zone__button input[type="file"] {
  display: none;
}
</style>