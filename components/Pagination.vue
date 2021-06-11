<template lang="pug">
.h-full.w-full.flex.justify-between
  .flex.items-center.right-0.space-x-1.text-sm
    p รายการที่แสดง :
    p.text-active {{ limit }}
  .flex.justify-center.items-center.space-x-5
    a.prev-next(href="#")
      svg-icon.w-4.h-4(name="previous")

    span(v-for="(item, index) in totalPages", :key="index")
      a.prev-next(href="#") {{ index + 1 }}

    a.prev-next(href="#")
      svg-icon.w-4.h-4(name="next")
  .flex.items-center.space-x-1.text-sm
    p รายการทั้งหมด :
    p.text-active {{ totalDocs }}
</template>

<script>
export default {
  props: ["totalDocs", "limit", "totalPages"],
};
</script>

<style lang="postcss">
.prev-next {
  @apply h-10 w-10 rounded-full flex items-center justify-center bg-gray-300 text-sub-title shadow-md hover:bg-active hover:text-white;
}
</style>
