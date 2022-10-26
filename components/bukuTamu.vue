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
                <label for="nama" class="block text-900 font-medium mb-2">Nama</label>
                <InputText id="nama" type="text" class="w-full mb-3" v-model="data.nama" />

                <label for="nohp" class="block text-900 font-medium mb-2">No. HP</label>
                <InputText id="nohp" type="text" class="w-full mb-3" v-model="data.noHp" />

                <div class="formgrid grid">
                    <div class="field col">
                        <label for="jurusan" class="block text-900 font-medium mb-2">Jurusan</label>
                        <InputText id="jurusan" type="text" class="w-full mb-3" v-model="data.jurusan" />
                    </div>
                    <div class="field col">
                        <label for="Angkatan" class="block text-900 font-medium mb-2">Angkatan</label>
                        <InputText id="Angkatan" type="text" class="w-full mb-3" v-model="data.angkatan" />
                    </div>
                </div>
                <Button label="Masuk" icon="pi pi-user" class="mt-3 p-button-warning" style="float:right"
                    @click="masuk" />
            </template>
        </Card>
    </div>
</template>

<script setup>

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
    console.log(data)
};

</script>