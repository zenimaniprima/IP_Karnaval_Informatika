<template>
    <div class="grid grid-nogutter text-800 container" style="background-color: #21364A;">
        <div class="col-12 p-6 mt-2 md:col-6 md:p-4 text-center md:text-left block align-items-center ">
            <section class="md:ml-6">
                <div class="text-7xl font-bold" style="color: #feaa09;">IMANI PRIMA</div>
                <p class="text-white mb-4">bosen dengan kerjaan IT yang itu itu aja, yuk berpetualang bersama kami
                    menelusuri tantangan baru di dunia IoT</p>
                <BukuTamu />
                <!-- <a href="#bukutamu"><Button label="Isi Buku Tamu" class="p-button-warning p-button-lg mt-2"></Button></a> -->
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden p-6 container-md mb-6">
            <img src="~/assets/undraw_Content_team_re_6rlg.svg" alt="Image" class="md:ml-auto block md:h-full md:mr-6"
                style="width: 80%;">
        </div>
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
}

a {
    text-decoration: none;
}

.container-md {
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .div {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>