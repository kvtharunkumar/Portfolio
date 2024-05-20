<template>
    <div class="relative w-full mt-[100px] lg:h-[800px]">
        <img src="../assets/image.png" class="h-full w-full" alt="Image">
        <div class="absolute inset-0 flex flex-col items-center justify-center space-y-10 lg:space-y-20">
            <div class="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10">
                <p class="text-white font-bold text-5xl">Download</p>
                <!-- <a  href="http://localhost:3000/download-resume" > -->
                    <button @click="downloadResume" class="bg-[#ee7534] dark:bg-green-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:cursor-pointer">
                        Resume
                    </button>
                <!-- </a> -->
            </div>
            <p class="text-white lg:text-2xl text-lg text-center">
                I love to code & solve complex problems.
            </p>
        </div>
    </div>
</template>

<script setup>
const downloadResume = () => {
      const url = 'http://localhost:3000/download-resume'; // Replace with your backend URL
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'resume.pdf'); // Change the filename if needed
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        })
        .catch(error => {
          console.error('Error downloading resume:', error);
        });
    };

</script>
