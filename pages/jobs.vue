<template>
    <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-center align-items-center">
        <div class="align-items-center text-sm lg:flex mr-6">
            <span class="line-height-3">🔥 like/follow/subscribe sosial media kami untuk mendapatkan
                merchandise</span>
        </div>
        <div class="align-items-center lg:flex">
            <span class="line-height-3 flex" style="cursor:pointer;">
                <a href="https://www.facebook.com/PTImaniPrima/" target="_blank">
                    <i class="pi pi-facebook mr-2" style="font-size: 1.4rem;" />
                </a>
                <a href="https://www.instagram.com/imaniprima/" target="_blank">
                    <i class="pi pi-instagram" style="font-size: 1.4rem;" />
                </a>
            </span>
        </div>
    </div>
    <div class="px-3 py-8 md:px-6 text-center block container" style="background-color: #21364A;">
        <div class="mb-2 font-bold text-5xl">
            <span class="text-900">Lowongan Kerja, </span>
            <span class="text-primary">PT. Imani Prima</span>
        </div>
        <div class="text-700 text-sm mb-3">jadilah bagian dari tim kami</div>
        <div class="grid justify-content-center">
            <Card class="col-12 md:col-6 w-10 md:w-4 m-4 md:m-6 shadow-6" v-for="(job, index) in jobs" :key="index">
                <template #content>
                    <img :src="job.bg_image" alt="gambar" class="w-12">
                    <h1 class="text-900 mb-3 font-medium">{{ job.nama }}</h1>
                    <p class="text-700 text-sm line-height-3">{{ job.deskripsi }}</p>
                    <Button label="Lihat Detail" class="p-button-sm p-button-outlined mt-4" />
                </template>
            </Card>
        </div>

        <Button @click="openPosition('bottomright')" label="Pendaftaran" icon="pi pi-question-circle"
            class="sticky p-button-rounded p-button-warning"
            style="bottom:2%;float: right;box-shadow: 2px 2px 3px #1d1d1d" />
        <Dialog header="Informasi" v-model:visible="displayPosition"
                :breakpoints="{'640px': '75vw' }" :style="{ width: '20vw' }" :position="position"
                :modal="true">
                <p class="text-center">Untuk pendaftaran dan informasi lebih lanjut silahkan kunjungi booth kami.</p><p class="text-center">Terima Kasih</p>
                <template #footer>
                    <Button label="Done" icon="pi pi-check" @click="closePosition" class="p-button-text" />
                    
                </template>
            </Dialog>
    </div>

</template>

<script setup>
const displayPosition = ref(false);
const position = ref('center');

const openPosition = (pos) => {
    position.value = pos;
    displayPosition.value = true;
};
const closePosition = () => {
    displayPosition.value = false;
};


const jobs = reactive([
    {
        nama: "HRD",
        lokasi: "jakarta",
        requirement: ["mampu bekerja keras", "kerja team", "kerja kelompok"],
        bg_image: "_nuxt/assets/img-1.jpg",
        poster: "",
        deskripsi: "membuatas laskdjlas jads sakldjlaskdja jasljdlaskdnaslncmzx,nckjfsh aslda klj"
    },
    {
        nama: "Design Team",
        lokasi: "jakarta",
        requirement: ["mampu bekerja keras", "kerja team", "kerja kelompok"],
        bg_image: "_nuxt/assets/img-2.jpg",
        poster: "",
        deskripsi: "membuatas laskdjlas jads sakldjlaskdja jasljdlaskdnaslncmzx,nckjfsh aslda klj"
    },
    {
        nama: "App Dev",
        lokasi: "jakarta",
        requirement: ["mampu bekerja keras", "kerja team", "kerja kelompok"],
        bg_image: "_nuxt/assets/img-3.jpg",
        poster: "",
        deskripsi: "membuatas laskdjlas jads sakldjlaskdja jasljdlaskdnaslncmzx,nckjfsh aslda klj"
    },
    {
        nama: "Hardware",
        lokasi: "jakarta",
        requirement: ["mampu bekerja keras", "kerja team", "kerja kelompok"],
        bg_image: "_nuxt/assets/img-4.jpg",
        poster: "",
        deskripsi: "membuatas laskdjlas jads sakldjlaskdja jasljdlaskdnaslncmzx,nckjfsh aslda klj"
    }
]);
</script>

<style>
.float {
    position: fixed;
    bottom: 40px;
    right: 40px;
    text-align: center;
    margin-top: 22px;
}
</style>