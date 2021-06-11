<template lang="pug">
.h-screen.flex.bg-gray-700
  .h-full.w-full.bg-gray-100
    .absolute.h-16.w-full.flex.justify-between.shadow-md.bg-white
      .nav-left
        .flex.justify-center.items-center
          //- .h-12.w-12.z-30.absolute.rounded-md.opacity-10.bg-black
          //- svg-icon.w-4.h-4(name="menu")
          p ปีงบประมาณ 2564
      .nav-middle
        .search-container
          svg-icon.absolute.w-4.h-4.left-5.text-sub-title(name="search")
          input.search(type="text", placeholder="ค้นหา")
        a.h-full.px-3.flex.items-center.space-x-2.text-active(
          href="#"
          @click="showModal()"
        )
          svg-icon.w-3.h-3(name="add")
          p เพิ่มเจ้าหน้าที่
        a.h-full.px-3.flex.items-center.space-x-2.text-active(
          href="#"
          @click="showModal()"
        )
          svg-icon.w-3.h-3(name="add") 
          p เพิ่มรายการลา
      .nav-right
        a.profile(href="#")
          svg-icon.h-10.w-10(name="profile")
    .pagination-container
      .pagination-list
        .h-14.w-full.flex.items-center.text-center.text-base.grid.grid-cols-6.shadow-sm
          p ชื่อ
          p นามสกุล
          p ตำแหน่ง
          .grid.grid-cols-5.col-span-2.flex.items-center.text-center.text-sm
            p ลาพักผ่อน
            p ลากิจ
            p ลาป่วย
            p วันลาพักผ่อนสะสมรวม
            p ยอดคงเหลือ
          p ตัวเลือก
        .pagination-item(v-for="item in officers", :key="item.id")
          p {{ item.firstName }}
          p {{ item.lastName }}
          p {{ item.position }}
          .w-full.grid.grid-cols-5.col-span-2.text-sm.text-center
            p {{ item.leave }}
            p {{ item.personalLeave }}
            p {{ item.sickLeave }}
            p {{ item.sickLeave }}
            p {{ item.sickLeave }}
          .flex.space-x-5
            //- a.option(href="#")
            //-   svg-icon.w-4.h-4.left-5(name="eye")
            a.option(href="#")
              svg-icon.w-4.h-4.left-5(name="edit")
            a.option(href="#")
              svg-icon.w-4.h-4.left-5(name="delete")
      .pagination-control
        Pagination(:totalDocs="totalDocs", :totalPages="totalPages", :limit="limit")
  modal(name="add", :width="600", :height="600")
    a.absolute.right-5.top-5(href="#", @click="hideModal()")
      svg-icon.w-4.h-4(name="close")
    AddOfficer(@isSubmited="waitCreatedChange")
</template>

<script>
import AddOfficer from "@/components/AddOfficer";
import Pagination from "@/components/Pagination"
export default {
  components: {
    AddOfficer,
    Pagination
  },
  data() {
    return {
      isShow: false,
      totalDocs: 0,
      totalPages: 0,
      limit: 0,
      officers: [],
      officersSlice: [],
    };
  },
  mounted() {
    this.fetchOfficers();
  },
  methods: {
    showModal() {
      this.$modal.show("add");
    },
    hideModal() {
      this.$modal.hide("add");
    },
    waitCreatedChange(isSubmited) {
      if (isSubmited) {
        this.$modal.hide("add");
      }
    },
    async fetchOfficers() {
      await this.$axios
        .get("https://maesuaihospital.herokuapp.com/officers-pagination")
        .then((res) => {
          console.log(res.data);
          this.officers = res.data.docs;
          this.totalDocs = res.data.totalDocs
          this.limit = res.data.limit
          this.totalPages = res.data.totalPages
        });
    },
  },
};
</script>

<style lang="postcss">
.search {
  @apply h-full w-9/12 pl-12 rounded-full bg-gray-200 focus:outline-none;
}
.search-container {
  @apply relative h-full w-8/12 flex items-center;
}
.nav-left {
  @apply w-2/12 px-10 flex items-center;
}
.nav-middle {
  @apply w-8/12 px-5 py-3 flex items-center justify-between;
}
.nav-right {
  @apply w-2/12 px-10 flex items-center justify-end 
}
.pagination-container {
  @apply h-full w-full p-5 flex flex-col items-center bg-gray-200;
}
.pagination-list {
  @apply h-5/6 w-10/12 mt-16 rounded-md shadow-md bg-white;
}
.pagination-control {
  @apply h-1/6 w-9/12 
}
.pagination-item {
  @apply w-full my-0.5 py-3 grid grid-cols-6 place-items-center shadow-sm;
}
.option {
  @apply h-10 px-3 flex items-center rounded-full shadow-sm bg-gray-200 text-sm text-sub-title hover:bg-active hover:text-white
}
.profile {
  @apply text-sub-title hover:text-active;
}
</style>