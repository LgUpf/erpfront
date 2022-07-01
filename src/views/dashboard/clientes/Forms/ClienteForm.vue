<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <vnud-card>
      <template v-slot:header>
        <div>
          <h4 class="card-title">Cadastro de Clientes</h4>
        </div>
      </template>

      <vee-input name="nome" type="text" placeholder="Nome" label="Nome" />

      <!-- <el-select
        class="select-primary"
        size="large"
        placeholder="Single Select"
        v-model="selects.simple"
      >
        <el-option
          class="select-primary"
          v-for="option in selects.countries"
          :value="option.value"
          :label="option.label"
          :key="option.label"
        >
        </el-option>
      </el-select> -->

      <vee-input
        name="telefone"
        type="tel"
        placeholder="Telefone"
        label="Telefone"
      />

      <div class="row">
        <div class="col-md-4">
          <vee-input
            name="estado"
            type="text"
            placeholder="Estado"
            label="Estado"
          />
        </div>
        <div class="col-md-4">
          <vee-input
            name="cidade"
            type="text"
            placeholder="Cidade"
            label="Cidade"
          />
        </div>

        <div class="col-md-4">
          <vee-input
            name="bairro"
            type="text"
            placeholder="Bairro"
            label="Bairro"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <vee-input
            name="logradouro"
            type="text"
            placeholder="Logradouro"
            label="Logradouro"
          />
        </div>
        <div class="col-md-3">
          <vee-input
            name="endereco"
            type="text"
            placeholder="Endereco"
            label="Endereco"
          />
        </div>
        <div class="col-md-3">
          <vee-input
            name="numero"
            type="text"
            placeholder="Numero"
            label="Numero"
          />
        </div>
        <div class="col-md-3">
          <vee-input name="cep" type="text" placeholder="Cep" label="Cep" />
        </div>
      </div>
      <vee-input name="email" type="email" placeholder="E-mail" label="Email" />

      <div class="category form-category">* Required fields</div>
      <div class="d-flex justify-content-between align-items-center">
        <checkbox class="pull-left"> Subscribe to newsletter </checkbox>

        <n-button native-type="submit" type="primary">Register</n-button>
      </div>
    </vnud-card>
  </Form>
</template>

<script>
import { VeeInput, Checkbox } from "@/components";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { ElDatePicker, ElSelect, ElOption } from "element-plus";
export default {
  components: {
    Checkbox,
    VeeInput,
    Form,
    ElSelect,
  },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }
    const schema = Yup.object().shape({
      nome: Yup.string().min(5).required(),
      email: Yup.string().email().required('O e-mail é um campo obrigatorio'),
      // password: Yup.string().min(5).required().label("The Password"),
      // confirm_password: Yup.string()
      //   .required()
      //   .oneOf([Yup.ref("password")], "Passwords do not match"),
    });

    return {
      schema,
      onSubmit
    };
  },
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
