<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <vnud-card>
      <template v-slot:header>
        <div>
          <h4 class="card-title">Cadastro de Empresas</h4>
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
        name="cnpj"
        type="cnpj"
        placeholder="Digite seu cnpj ou cpf"
        label="CNPJ / CPF"
      />

      <div class="row">
        <div class="col-md-4">
          <vee-input
            name="url"
            type="text"
            placeholder="url do seu site"
            label="url"
          />
        </div>
        <div class="col-md-4">
          <vee-input
            name="inscrição"
            type="data"
            format="d-M-yyyy"
            placeholder="Digite a data de inscriçaõ"
            label="inscrição"
          />
        </div>

        <div class="col-md-4">
          <vee-input
            name="expiracao"
            type="data"
            placeholder="Data de vencimento ou expiração do contrato"
            label="expiracao"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <vee-input
            name="inscrição_id"
            type="text"
            placeholder="Numero da inscrição"
            label="Inscrição_id"
          />
        </div>
        <div class="col-md-3">
          <vee-input
            name="inscricao_ativo"
            type="text"
            placeholder="Inscrição ativa"
            label="inscricao_ativo"
          />
        </div>
        <div class="col-md-3">
          <vee-input
            name="inscricao_suspensa"
            type="data"
            placeholder="Inscricao suspensa"
            label="Inscricao_suspensa"
          />
        </div>
      </div>
      <vee-input name="email" type="email" placeholder="E-mail" label="Email" />

      <div class="category form-category">* Required fields</div>
      <div class="d-flex justify-content-between align-items-center">
        <checkbox class="pull-left">Ativo</checkbox>
        <checkbox class="pull-left">Inativo</checkbox>

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
      nome: Yup.string().min(5).required('O nome é um campo obrigatorio')
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
