<template>
    <div class="flex items-center justify-center p-12 dark:bg-black bg-white ">
     <p class="text-3xl dark:text-white"  >Have a Question?</p>
 </div>
   <div class="flex items-center justify-center p-12 dark:bg-black bg-white ">
   
   <div class="mx-auto w-full max-w-[550px]">
     <form action="" method="POST">
       <div class="mb-5">
         <label
           for="name"
           class="mb-3 block text-base font-medium text-black dark:text-white"
         >
           Full Name
         </label>
         <input
           type="text"
           name="name"
           id="name"
           placeholder=""
           class="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-[#1d1c1c]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none dark:focus:border-green-500 focus:border-[#ee7534] focus:shadow-md"
         />
       </div>
       <div class="mb-5">
         <label
           for="email"
           class="mb-3 block text-base font-medium  text-black dark:text-white"
         >
           Email Address
         </label>
         <input
           type="email"
           name="email"
           id="email"
           placeholder=""
           class="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-[#1d1c1c]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none dark:focus:border-green-500 focus:border-[#ee7534] focus:shadow-md"
         />
       </div>
       <div class="mb-5">
         <label
           for="subject"
           class="mb-3 block text-base font-medium  text-black dark:text-white"
         >
           Subject
         </label>
         <input
           type="text"
           name="subject"
           id="subject"
           placeholder=""
           class="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-[#1d1c1c]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none dark:focus:border-green-500 focus:border-[#ee7534] focus:shadow-md"
         />
       </div>
       <div class="mb-5">
         <label
           for="message"
           class="mb-3 block text-base font-medium  text-black dark:text-white"
         >
           Message
         </label>
         <textarea
           rows="4"
           name="message"
           id="message"
           placeholder=""
           class="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-[#1d1c1c]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none dark:focus:border-green-500 focus:border-[#ee7534] focus:shadow-md"
         ></textarea>
       </div>
       <div>
         <button
           class="hover:shadow-form rounded-md bg-[#ee7534] dark:bg-green-500 dark:text-black py-3 px-8 text-base font-semibold text-white outline-none"
         >
           Submit
         </button>
       </div>
     </form>
   </div>
 </div>
</template>
