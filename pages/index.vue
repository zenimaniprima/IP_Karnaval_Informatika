<template>
    <div>
        <div class="grid grid-nogutter surface-section text-800 container">
            <div class="col-12 p-6 mt-6 md:col-6 md:p-6 md:mt-1 text-center md:text-left block align-items-center ">
                <section class="md:ml-6">
                    <span class="block text-3xl font-bold mb-1">Mari Berkarya Bersama</span>
                    <div class="text-7xl text-primary font-bold mb-1">Imani Prima</div>
                    <p class="mb-6 text-700 line-height-3">We're Simple</p>
                    <a href="#bukutamu"><Button label="Isi Buku Tamu" class="p-button-warning p-button-lg mt-2"></Button></a>
                </section>
            </div>
            <div class="col-12 md:col-6 overflow-hidden p-6 container-md mb-6">
                <img src="~/assets/undraw_Content_team_re_6rlg.svg" alt="Image"
                    class="md:ml-auto block md:h-full md:mr-6" style="width: 80%;">
            </div>
        </div>
        <div class="container surface-200" id="bukutamu">
            <BukuTamu />
        </div>
    </div>
</template>

<style>
html{
    scroll-behavior: smooth;
}
a{
    text-decoration: none;
}
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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