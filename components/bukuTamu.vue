<template>
    <div class="surface-card p-3 md:p-4 shadow-6 border-round w-full md:w-6 mx-6">
        <Toast />
        <Card>
            <template #title>
                <div class="text-center">
                    <p class="text-3xl text-white">Buku Tamu <span class="text-primary text-bold">Imani Prima</span></p>
                    <hr class="mt-3 w-2">
                </div>
            </template>
            <template #content>
                <Form>
                <label for="nama" class="block text-900 font-medium mb-2">Nama<span style="color:red;">*</span></label>
                <Field class="w-full mb-3" id="nama" name="nama" :rules="isRequired" v-model="data.nama" />
                <ErrorMessage name="nama"><small style="color:red;">Nama harus diisi</small></ErrorMessage>
                <!-- <InputText id="nama" type="text" class="w-full mb-3" v-model="data.nama" /> -->

                <label for="nohp" class="block text-900 font-medium mb-2">No. HP<span style="color:red;">*</span></label>
                <Field class="w-full mb-3" id="nohp" name="nohp" :rules="isRequired" v-model="data.noHp" />
                <ErrorMessage name="nohp"><small style="color:red;">No HP harus diisi</small></ErrorMessage>
                <!-- <InputText id="nohp" type="text" class="w-full mb-3" v-model="data.noHp" /> -->

                <div class="formgrid grid">
                    <div class="field col">
                        <label for="jurusan" class="block text-900 font-medium mb-2">Jurusan<span style="color:red;">*</span></label>
                        <Field class="w-full mb-3" id="jurusan" name="jurusan" :rules="isRequired" v-model="data.jurusan" />
                        <ErrorMessage name="jurusan"><small style="color:red;">Jurusan harus diisi</small></ErrorMessage>
                        <!-- <InputText id="jurusan" type="text" class="w-full mb-3" v-model="data.jurusan" /> -->
                    </div>
                    <div class="field col">
                        <label for="Angkatan" class="block text-900 font-medium mb-2">Angkatan<span style="color:red;">*</span></label>
                        <Field class="w-full mb-3" id="Angkatan" name="Angkatan" :rules="isRequired" v-model="data.angkatan" />
                        <ErrorMessage name="Angkatan"><small style="color:red;">Angkatan harus diisi</small></ErrorMessage>
                        <!-- <InputText id="Angkatan" type="text" class="w-full mb-3" v-model="data.angkatan" /> -->
                    </div>
                </div>
                <Button label="Masuk" icon="pi pi-user" class="mt-3 p-button-warning" style="float:right"
                    @click="masuk" />
                </Form>
            </template>
        </Card>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useToast } from "primevue/usetoast";

const toast = useToast();

const data = reactive({
    nama: "",
    noHp: "",
    jurusan: "",
    angkatan: ""
});

const isRequired = (value) => {
    if (!value) {
        return "This field is required";
    }
    return true;
};
const masuk = () => {
    try {
        axios.post("http://localhost:3000/api/landing/guests", {
            name: data.nama,
            phone: data.noHp,
            major: data.jurusan,
            generation: data.angkatan,
        }).then(() => {
            toast.add({ severity: "info", summary: "Enjoy the Carnaval" });
        })
    } catch (err) {
        console.log(err);
    }
};

</script>

<style>
.mb-3{
    height: 35px;
}
</style>