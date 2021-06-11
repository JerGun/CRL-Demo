<template lang="pug">
.h-full.w-full.flex.flex-col.justify-center.items-center.space-y-10
  .flex.flex-col.justify-center.items-center.space-y-5
    .flex.flex-col.justify-center.items-center.space-y-1
      p ปีงบประมาณ
      input.h-10.w-20.flex.text-center.rounded-full.border.shadow-md.border-gray-200(
        value="2564",
        disabled
      ) 
    .flex.space-x-10
      .space-y-1
        .flex.ml-1
          p ชื่อ
          p.text-active *
        input.text-input(
          v-model.trim="$v.form.firstName.$model",
          type="text",
          placeholder="ชื่อ",
          :class="{ 'text-input-error': $v.form.firstName.$error }"
        )
        .error(v-if="$v.form.firstName.$dirty && !$v.form.firstName.required") กรุณากรอกชื่อ
      .space-y-1
        .flex.ml-1
          p นามสกุล
          p.text-active *
        input.text-input(
          v-model.trim="$v.form.lastName.$model",
          type="text",
          placeholder="นามสกุล",
          :class="{ 'text-input-error': $v.form.lastName.$error }"
        )
        .error(v-if="$v.form.lastName.$dirty && !$v.form.lastName.required") กรุณากรอกนามสกุล
    .flex.space-x-10
      .space-y-1
        .flex.ml-1
          p แผนก
          p.text-active *
        input.text-input(
          v-model.trim="$v.form.department.$model",
          type="text",
          placeholder="แผนก",
          :class="{ 'text-input-error': $v.form.department.$error }"
        )
        .error(
          v-if="$v.form.department.$dirty && !$v.form.department.required"
        ) กรุณากรอกแผนก
      .space-y-1
        .flex.ml-1
          p ตำแหน่ง
          p.text-active *
        input.text-input(
          v-model.trim="$v.form.position.$model",
          type="text",
          placeholder="ตำแหน่ง",
          :class="{ 'text-input-error': $v.form.position.$error }"
        )
        .error(v-if="$v.form.position.$dirty && !$v.form.position.required") กรุณากรอกตำแหน่ง
    .flex.space-x-10
      .space-y-1
        .flex.ml-1
          p วันลาพักผ่อน
          p.text-active *
        input.number-input(
          v-model.trim="$v.form.leave.$model",
          type="text",
          min="0",
          placeholder="0",
          :class="{ 'number-input-error': $v.form.leave.$error }"
        )
        .error(v-if="$v.form.leave.$dirty && !$v.form.leave.required") กรุณากรอกวันลาพักผ่อน
        .error(v-if="$v.form.leave.$dirty && !$v.form.leave.numeric") กรุณากรอกเป็นตัวเลขเท่านั้น
      .space-y-1
        .flex.ml-1
          p วันลากิจ
          p.text-active *
        input.number-input(
          v-model.trim="$v.form.personalLeave.$model",
          type="text",
          min="0",
          placeholder="0",
          :class="{ 'number-input-error': $v.form.personalLeave.$error }"
        )
        .error(
          v-if="$v.form.personalLeave.$dirty && !$v.form.personalLeave.required"
        ) กรุณากรอกวันลากิจ
        .error(
          v-if="$v.form.personalLeave.$dirty && !$v.form.personalLeave.numeric"
        ) กรุณากรอกเป็นตัวเลขเท่านั้น
      .space-y-1
        .flex.ml-1
          p วันลาป่วย
          p.text-active *
        input.number-input(
          v-model.trim="$v.form.sickLeave.$model",
          type="text",
          min="0",
          placeholder="0",
          :class="{ 'number-input-error': $v.form.sickLeave.$error }"
        )
        .error(v-if="$v.form.sickLeave.$dirty && !$v.form.sickLeave.required") กรุณากรอกวันลาป่วย
        .error(v-if="$v.form.sickLeave.$dirty && !$v.form.sickLeave.numeric") กรุณากรอกเป็นตัวเลขเท่านั้น
  a.h-12.px-8.flex.items-center.rounded-full.shadow-md.bg-active.text-white(
    href="#",
    @click="submit()"
  )
    svg.animate-spin.-ml-1.mr-3.h-5.w-5.text-white(
      xmlns="http://www.w3.org/2000/svg",
      fill="none",
      viewBox="0 0 24 24",
      v-if="isSubmited"
    )
      circle.opacity-25(
        cx="12",
        cy="12",
        r="10",
        stroke="currentColor",
        stroke-width="4"
      )
      path.opacity-75(
        fill="currentColor",
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      )
    p เพิ่มเจ้าหน้าที่
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
export default {
  data: () => {
    return {
      form: {
        firstName: "",
        lastName: "",
        department: "",
        position: "",
        leave: "",
        personalLeave: "",
        sickLeave: "",
        year: "2564",
      },
      isSubmited: false,
    };
  },
  validations: {
    form: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      department: {
        required,
      },
      position: {
        required,
      },
      leave: {
        required,
        numeric,
      },
      personalLeave: {
        required,
        numeric,
      },
      sickLeave: {
        required,
        numeric,
      },
    },
  },
  methods: {
    async submit() {
      if (!this.$v.form.firstName.required) {
        this.$v.form.firstName.$touch();
      }
      if (!this.$v.form.lastName.required) {
        this.$v.form.lastName.$touch();
      }
      if (!this.$v.form.department.required) {
        this.$v.form.department.$touch();
      }
      if (!this.$v.form.position.required) {
        this.$v.form.position.$touch();
      }
      if (!this.$v.form.leave.required) {
        this.$v.form.leave.$touch();
      }
      if (!this.$v.form.personalLeave.required) {
        this.$v.form.personalLeave.$touch();
      }
      if (!this.$v.form.sickLeave.required) {
        this.$v.form.sickLeave.$touch();
      }
      if (
        this.$v.form.firstName.required &&
        this.$v.form.lastName.required &&
        this.$v.form.department.required &&
        this.$v.form.position.required &&
        this.$v.form.leave.required &&
        this.$v.form.leave.numeric &&
        this.$v.form.personalLeave.required &&
        this.$v.form.personalLeave.numeric &&
        this.$v.form.sickLeave.required &&
        this.$v.form.sickLeave.numeric
      ) {
        this.isSubmited = true;
        await this.$axios
          .post("https://maesuaihospital.herokuapp.com/officer", this.form)
          .then(
            console.log("Created"),
            this.$emit("isSubmited", true),
            setTimeout(() => {
              this.isSubmited = false;
            }, 1500)
          );
      }
    },
    send() {
      this.isSubmited = !this.isSubmited;
      setTimeout(() => {
        this.$emit("isSubmited", true);
      }, 2000);
    },
  },
};
</script>

<style lang="postcss">
.text-input {
  @apply h-10 pl-3 rounded-full border shadow-md border-gray-200 focus:outline-none;
}
.number-input {
  @apply h-10 w-12 flex text-center rounded-full border shadow-md border-gray-200 focus:outline-none;
}
.text-input-error {
  @apply border-red-500
}
.number-input-error {
  @apply border-red-500
}
.error {
  @apply ml-1 text-sm text-red-500;
}
</style>
