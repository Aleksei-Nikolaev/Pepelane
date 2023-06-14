<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
const kaka = {
  id: "5f1aef00534144be0089d6cc",
  name: "PORTALIS",
  type: "helicopter",
  description: "quis laborum commodo minim velit consequat",
  specifications_text: "Sit commodo anim fugiat sunt sit esse do. Magna qui in labore esse est id do laboris aute duis amet duis aliquip et. Dolor ipsum commodo exercitation do aliqua et aliqua enim. Deserunt incididunt duis eu excepteur velit commodo magna magna. Occaecat labore id veniam Lorem officia deserunt cillum laborum officia tempor nulla.\n\nElit ex tempor minim velit tempor aliquip labore amet consequat deserunt non. Amet ut Lorem tempor mollit exercitation sit ipsum magna sint aute ipsum. Velit consequat cillum Lorem fugiat magna labore.",
  team_text: "Eu ullamco ea fugiat id dolor commodo. Eu irure non exercitation veniam sit est dolore officia quis consectetur cupidatat. Ea est ex velit non commodo nisi laborum anim labore ad aliqua. Veniam eiusmod officia eiusmod ad consequat laborum. Anim proident veniam Lorem esse sunt quis commodo mollit. Ex pariatur commodo sunt sunt deserunt exercitation tempor aliqua aliquip est ipsum incididunt.",
  term_text: "Enim excepteur esse velit ex sunt ipsum occaecat proident esse. Sint sit aute esse deserunt ipsum. Reprehenderit aliqua labore veniam excepteur culpa amet sint do mollit pariatur.\n\nDeserunt officia Lorem quis cillum velit cupidatat id do nulla. Incididunt ullamco labore aliqua aute exercitation tempor fugiat in esse mollit duis in magna velit. Lorem commodo sunt in cupidatat eiusmod aute laborum. Do amet ipsum pariatur nostrud qui aliquip veniam est do. Amet enim et amet id amet dolor irure dolor. Proident consectetur et irure eu irure sint veniam aliqua aute tempor. Aliqua dolore est pariatur ipsum cupidatat do commodo qui qui deserunt.\n\nCulpa nulla irure dolore eu magna aute duis velit. Amet cillum Lorem in culpa occaecat amet aute eiusmod ullamco dolor velit amet. Consequat reprehenderit eiusmod dolore ipsum laboris cupidatat nisi quis. Velit esse est qui est irure dolore excepteur aliquip veniam aliqua esse duis. Consequat ad excepteur eu incididunt.",
  rent: "9,503",
  preview: "https://loremflickr.com/180/180/helicopter?random=5f1aef00534144be0089d6cc",
  image: "https://loremflickr.com/700/700/helicopter"
}

</script>

<template>
    <div class="list-container">
      <TheVehicleCard :vehicle="kaka" class="list-container__card" />
    </div>
</template>

<style scoped lang="scss">
.list-container {
  background: var(--base_50);
  border-radius: var(--border_radius_big);
  width: 100%;
  padding: 0 64px 56px 64px;
  display: flex;


}

</style>