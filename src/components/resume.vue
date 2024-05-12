<template>
    <!-- <div class="w-full lg:mt-[200px] lg:h-[50%] mt-4 relative bg-cover">
        <div class="lg:h-[50%] w-full relative">
            <div class="h-[50%]">
                <img class="w-full h-[50%]" src="../assets/image.png">
                <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md">
                    Button
                </button>
            </div>
        </div>
    </div> -->
    <div class="flex lg:flex-col max-sm:flex-row w-full lg:mt-[200px] lg:h-[400px] mt-2 relative">
    <img src="../assets/image.png" class="h-full w-full" alt="Image">
    <div class="h-50 w-full absolute grid lg:grid-cols-2 grid-rows-2 justify-evenly space-x-10 lg:gap-10 lg:mt-[180px] mt-[50px]">
        <div class="inset-0 flex space-x-10 lg:flex-row flex-col items-center justify-evenly lg:ml-[500px] gap-10 cursor-pointer">
            <p class="text-white text-justify font-bold text-5xl text-inline">Download</p>

            <a href="https://drive.google.com/file/d/16pU0p0r9hcjN3LPjYmvrtk9sXQ4meDJf/view?usp=drive_link"> <button class="dark:bg-green-500 bg-[#ee7534] cursor-pointer text-white px-10 py-4 max-lg:mb-10 rounded-full text-lg max-sm:mr-10 font-bold">
                 Resume
            </button></a>
        </div>
    </div>
    <div class="absolute">
    <p class=" relative text-white lg:text-2xl text-lg lg:ml-[500px] lg:mt-[300px] max-sm:mt-[200px] max-sm:ml-7 ml-[200px] mt-[300px]">I love to code & Slove complex Problems.</p></div>
</div>



</template>