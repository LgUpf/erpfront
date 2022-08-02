<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <vnud-card>
      <template v-slot:header>
        <div>
          <h4 class="card-title">Cadastro de usuarios</h4>
        </div>
      </template>

      <vee-input name="name" type="text" placeholder="Nome" label="Nome" />

      <vee-input name="email" type="email" placeholder="E-mail" label="Email" />

      <vee-input
        name="password"
        type="password"
        placeholder="Senha"
        label="Senha"
      />

      <div class="category form-category">* Required fields</div>
      <div class="d-flex justify-content-between align-items-center">
        <checkbox class="ativo">Ativo</checkbox>
        <checkbox class="inativo">Inativo</checkbox>

        <n-button native-type="submit" type="primary">Register</n-button>
      </div>
    </vnud-card>
  </Form>
</template>

<script>
import { VeeInput, Checkbox } from "@/components";
import { useStore } from "vuex";
import router from "@/router";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { ElDatePicker, ElSelect, ElOption } from "element-plus";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    Checkbox,
    VeeInput,
    Form,
    ElSelect,
  },
  setup() {},
};
</script>

<style>
input::placeholder {
  color: rgb(36, 30, 30) !important;
}

.select-primary.el-select .el-input .el-input__inner {
  background-color: rgba(255, 255, 255, 0.737) !important;
  color: black;
}
</style>
