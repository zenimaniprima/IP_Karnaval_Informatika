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
            <Card class="col-12 md:col-6 p-0 w-10 md:w-4 m-4 md:m-6 shadow-6" v-for="(job, index) in jobs" :key="index">
                <template #content>
                    <h3 class="text-900 mb-3 font-medium">{{ job.nama }}</h3>
                    <p class="text-700 text-sm line-height-3">{{ job.deskripsi }}</p>
                    <Button label="Lihat Detail" class="p-button-sm p-button-outlined mt-4"
                        @click="openModal(job.nama, job.lokasi, job.deskripsi, job.requirement)" />
                </template>
            </Card>
            <Dialog :header="jobsModal.nama" v-model:visible="displayModal"
                :breakpoints="{ '960px': '75vw', '640px': '90vw' }" :style="{ width: '50vw' }"
                :content-style="{ padding: '30px', backgroundColor: '#21364A' }" :modal="true">
                <span class="text-1xl"><b>Deskripsi :</b></span>
                <p class="mb-4">{{ jobsModal.deskripsi }}</p>
                <p class="text-1xl mb-3"><b>Lokasi :</b> {{ jobsModal.lokasi }}</p>
                <span class="text-1xl"><b>Kualifikasi :</b></span>
                <ul>
                    <li v-for="(req, index) in jobsModal.requirement" :key="index">{{ req }}</li>
                </ul>
                <template #footer>
                    <Button label="Oke" class="mt-4" icon="pi pi-check" @click="closeModal" autofocus />
                </template>
            </Dialog>
        </div>
        </AosVue>
        <Button @click="openPosition('bottomright')" label="Pendaftaran" icon="pi pi-question-circle"
            class="sticky p-button-rounded p-button-warning"
            style="bottom:2%;float: right;box-shadow: 2px 2px 3px #1d1d1d" />
        <Dialog header="Informasi" v-model:visible="displayPosition" :breakpoints="{ '640px': '75vw' }"
            :style="{ width: '20vw' }" :position="position" :modal="true">
            <p class="text-center">Untuk pendaftaran dan informasi lebih lanjut silahkan kunjungi booth kami.</p>
            <p class="text-center">Terima Kasih</p>
            <template #footer>
                <Button label="Done" icon="pi pi-check" @click="closePosition" class="p-button-text" />
            </template>
        </Dialog>
    </div>

</template>

<script setup>

const displayPosition = ref(false);
const position = ref('center');
const displayModal = ref(false);
const jobsModal = reactive({
    nama: "",
    lokasi: "",
    deskripsi: "",
    requirement: "",
});

const openModal = (nama, lokasi, deskripsi, requirement) => {
    displayModal.value = true;
    jobsModal.nama = nama;
    jobsModal.lokasi = lokasi;
    jobsModal.deskripsi = deskripsi;
    jobsModal.requirement = requirement;
};

const closeModal = () => {
    displayModal.value = false;
};
const openPosition = (pos) => {
    position.value = pos;
    displayPosition.value = true;
};
const closePosition = () => {
    displayPosition.value = false;
};

const jobs = reactive([
    {
        nama: "Cleaning Service/OB",
        lokasi: "Jakarta",
        requirement: ["Pendidikan minimal SMA", "Pria, usia minimal 25 tahun", "Pengalaman minimal 2 tahun", "Mampu membersihkan dan merapikan seluruh area kantor dengan cekatan.", "Memahami pengetahuan dasar mengenai peralatan dan bahan yang dipakai untuk bekerja.", "Dapat bekerja secara individu ataupun dalam tim.", "Jujur dan bertanggung jawab.", "Memiliki kemampuan komunikasi yang baik.", "Dapat bekerja dalam tekanan."],
        deskripsi: "Membersihkan dan merapikan seluruh area kantor"
    },
    {
        nama: "Business Analyst",
        lokasi: "Jakarta",
        requirement: ["Pendidikan Minimal Sarjana  jurusan  Teknik Informatika, Sistem Informasi, Ilmu Komputer, dan Manajemen Informatika.", "Memahami perancangan sebuah aplikasi.", "Memahami tahapan  dalam SDLC.", "Fresh Graduated apabila ada pengalaman lebih disukai.", "Memiliki kemampuan komunikasi yang baik.", "Bersemangat untuk mempelajari hal-hal baru.", "Dapat bekerja dalam tekanan."],
        deskripsi: "Melakukan analisa terhadap kebutuhan produk IT, mulai dari trend, kebutuhan, dan pasar.Dapat menjabarkan visi mengenai pengembangan produk IT. Membuat presentasi untuk pengembangan produk."
    },
    {
        nama: "System Analyst",
        lokasi: "Jakarta",
        requirement: ["Pendidikan minimal S1/D4 jurusan Sistem Informasi/Manajemen Informatika/Teknik Komputer atau sebidang yang sama", "Memiliki pengalaman minimal 1-2 tahun sebagai System Analyst dan terlibat minimal 2 (dua) siklus proyek hingga tahap close-out", "Mahir dalam menerjemahkan dokumen kebutuhan sistem menjadi konsep detail pengembangan system aplikasi", "Mahir dalam mendesain alur proses dalam bentuk diagram flow : Use Case / Flow Chart / DFD", "Mahir dalam mendesain struktur database : ERD", "Mahir dalam mendesain tampilan/UI dengan memperhatikan prinsip-prinsip UI/UX", "Mahir menggunakan tools untuk melakukan wireframe dan prototyping : Balsamiq, Figma", "Memiliki daya analisa yang kuat, berpikir logis dan sistematis serta dapat memberikan solusi", "Proaktif dan memiliki inisiatif yang tinggi", "Dapat berkomunikasi dan bekerjasama dengan baik"],
        deskripsi: "Berinteraksi dengan user untuk melakukan translasi kebutuhan bisnis menjadi desain spesifikasi sistem Menganalisa, merancang dan membuat dokumentasi mengenai design database dan aplikasi sesuai kebutuhan user secara efektif Membangun wireframe dan screenflow, data flow diagram, dan functional case untuk mempermudah penggambaran sebuah flow bisnis yang dikaitkan kepada fungsional sistem Melakukan Quality Assurance, SIT, dan UAT selama pengembangan sistem"
    },
    {
        nama: "Programmer",
        lokasi: "Jakarta",
        requirement: ["Pendidikan Minimal Sarjana  jurusan  Teknik Informatika, Sistem Informasi, Ilmu Komputer, dan Manajemen Informatika.", "Menguasai : PHP, Javascript framework Node Js", "Memahami Java spring boot (nilai tambah)", "Fresh Graduated apabila ada pengalaman lebih disukai.", "Memiliki kemampuan komunikasi yang baik.", "Bersemangat untuk mempelajari hal-hal baru.", "Dapat bekerja dalam tekanan"],
        deskripsi: "Membangun aplikasi dengan bahasa pemrograman tertentu. Mengawal proses pembangunan sebuat aplikasi  mulai dari perancangan sampai dengan pengetesan."
    },
    {
        nama: "Software Engineer",
        lokasi: "Bandung",
        requirement: ["frontend: react, disukai berpengalaman dengan vue atau angular", "backend: disukai berpengalaman dengan python, php, java, dan golang", "database: NoSQL, Opengraph, disukai berpengalaman dengan mongodb, mysql, dan postgresql", "android and ios mobile app development: disukai berpengalaman dengan flutter", "berpengalaman menggunakan git, subversions, docker.", "pengetahuan dan berpengalaman tentang web communication dan IOT messaging protocols seperti MQTT dan Websocket (optional)"],
        deskripsi: "Mengembangkan solusi software berdasarkan spesifikasi kebutuhan Merawat, memperbaiki, meningkatkan dan memperbaharui software yang ada Mengintegrasikan komponen atau menambahkan fitur baru pada software yang ada Membuat dokumen teknis terkait sebagai laporan dan dokumentasi Berkomunikasi dengan klien terkait aplikasi atau solusi perangkat lunak yang di kembangkan"
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