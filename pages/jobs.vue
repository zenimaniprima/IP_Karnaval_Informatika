<template>

    <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-center align-items-center">

        <div class="align-items-center text-sm lg:flex mr-6">
            <span class="line-height-3">🔥 like/follow/subscribe sosial media kami untuk mendapatkan merchandise</span>
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
            <AosVue animation="flip-up" :duration="500">
                <span class="text-900">Lowongan Kerja, </span>
                <span class="text-primary">PT. Imani Prima</span>
            </AosVue>
        </div>
        <AosVue animation="flip-down" :delay="500" :duration="500">
            <div class="text-700 text-sm mb-3">jadilah bagian dari tim kami</div>
        </AosVue>
        <AosVue animation="slide-left" :delay="1000" :duration="1000">
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
        </AosVue>
    </div>
</template>

<script setup>
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