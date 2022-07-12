<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <vnud-card>
      <template v-slot:header>
        <div>
          <h4 class="card-title ml-4">Cadastro de Perfil</h4>
        </div>
      </template>
        <div class="col-md-12">
          <vee-input name="nome" type="text" placeholder="Nome" label="Nome" />
        </div>
        <div class="col-md-12">
              <vee-input
                name="descricao"
                type="text"
                placeholder="Descrição"
                label="Descricao"
              />
              <n-button native-type="submit" type="primary">Register</n-button>
        </div>
    </vnud-card>
  </Form>
</template>

<script>
import { VeeInput, Checkbox } from "@/components";
import { Form } from "vee-validate";
import * as Yup from "yup";
export default {
  components: {
    Checkbox,
    VeeInput,
    Form,
  },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }
    const schema = Yup.object().shape({
      nome: Yup.string().min(5).required('O nome é um campo obrigatorio'),
      descricao: Yup.string().min(5).required('A descrição é um campo obrigatorio'),
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
