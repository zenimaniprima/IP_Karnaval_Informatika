<template>
    <div class="surface-card p-3 md:p-4 shadow-6 border-round w-full md:w-6 mx-6">
        <Card>
            <template #title>
                <div class="text-center">
                    <p class="text-3xl text-white">Buku Tamu <span class="text-primary text-bold">Imani Prima</span></p>
                    <hr class="mt-3 w-2">
                </div>
            </template>
            <template #content>
                <Form :validation-schema="schema" @submit="onSubmit">
                    <label for="nama" class="block text-900 font-medium mb-2">Nama</label>
                    <InputText name="nama" type="text" class="w-full mb-3"  v-model="data.nama" />
                    <!-- <ErrorMessage name="nama"><small style="color: red">nama harus terisi</small></ErrorMessage> -->

                    <Field name="name" />
                    <ErrorMessage name="name" />

                    <button>Submit</button>
                </Form>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
    noHp: yup.string().required(),
    nama: yup.string().required(),
    jurusan: yup.string().required(),
    angkatan: yup.string().required(),
});
const isRequired = (value) => {
    if (!value) {
        return "This field is required";
    }
    return true;
};
function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
}

const data = reactive({
    nama: "",
    noHp: "",
    jurusan: "",
    angkatan: ""
});
</script>