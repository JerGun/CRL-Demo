<template>
  <div class="h-screen flex bg-gray-700">
    <div class="h-full w-2/12 pt-10 flex flex-col items-center bg-red-400">
      <p class="text-3xl mb-10">Officer</p>
      <div class="w-full mb-5">
        <p class="mb-1 flex items-center justify-center text-sm text-gray-700">
          MY PORTAL
        </p>
        <a href="#" class="h-12 w-full flex items-center justify-center"
          >PROFILE</a
        >
      </div>

      <div class="w-full mb-5">
        <p class="mb-1 flex items-center justify-center text-sm text-gray-700">
          MANAGEMENT
        </p>
        <a
          href="#"
          class="h-12 w-full flex items-center justify-center bg-yellow-500"
          >HOME</a
        >
        <a
          href="#"
          class="h-12 w-full flex items-center justify-center"
          v-if="(toggleModal = !toggleModal)"
          >ADD OFFICER</a
        >
      </div>
    </div>
    <div class="h-full w-10/12 bg-gray-100 flex justify-center items-center">
      <div class="h-16 w-full flex justify-between shadow-md bg-white">
        <div class="w-3/12 px-5 flex items-center">a</div>
        <div class="w-7/12 px-5 py-3 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            class="h-full w-8/12 pl-5 rounded-full focus:outline-none bg-gray-200"
          />
          <a href="#" class="h-full px-3 flex items-center bg-red-200"
            >ADD OFFICER</a
          >
        </div>
        <div class="w-2/12 px-5 flex items-center">a</div>
      </div>
      <div class="h-5/6"></div>
      
      <AddCustomer v-if="toggleModal" class="absolute z-50" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      toggleModal: false,
    };
  },
};
</script>

<style>
</style>