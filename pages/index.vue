<template>
    <div class="grid grid-nogutter text-800 container" style="background-color: #129666;">
        <div class="col-12 p-6 mt-2 md:col-6 md:p-4 text-center md:text-left block align-items-center ">
            <section class="md:ml-6">
                <AosVue animation="fade-down" :duration="500">
                    <!-- <div class="text-7xl font-bold" style="color: #feaa09;">IMANI PRIMA</div> -->
                    <img src="~/assets/logo-putih.png" />
                </AosVue>
                <AosVue animation="zoom-in" :delay="500" :duration="500">
                <p class="text-3xl text-white mb-4"><b>Anda layak jadi asset kami</b></p>
                </AosVue>
                    <BukuTamu />
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden p-6 container-md mb-6">
                <img src="~/assets/undraw_content_team_re_6rlg.svg" alt="Image"
                    class="md:ml-auto block md:h-full md:mr-6" style="width: 80%;">
        </div>
    </div>
</template>

<style>


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