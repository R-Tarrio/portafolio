<template>
    <section class="h-full lg:min-h-screen flex justify-center items-center overflow-hidden" id="home">
        <div class="container mx-auto flex sm:flex-col items-center justify-center  sm:pt-[120px] only-md:pt-[150px] md:pb-[50px] lg:pt-[165px] lg:pb-[100px] sm:pb-[70px]">
        
        <!-- Profile content and nav start -->
        <div class="flex items-center ltr:xl:pl-[65px] ltr:lg:pl-[50px] ltr:only-md:pl-[40px] rtl:xl:pr-[65px] rtl:lg:pr-[50px] rtl:only-md:pr-[40px] flex-grow sm:mt-[30px] sm:text-center">

            <!-- profile content start -->
            <div class="grow">
                <span class="text-accent1 text-[24px] font-semibold italic pb-[5px]">Hola Soy</span>
                <h2 class="lg:text-[60px] only-md:text-[40px] sm:text-[28px] font-bold font-heebo text-heading dark:text-white">{{profile.FIRST_NAME}} {{profile.LAST_NAME}}</h2>
                <h3 class="font-heebo font-normal text-primary dark:text-white"> {{profile.PROFESSION}} </h3>
                <p class="lg:text-[20px] md:text-[16px] text-paragraph dark:text-slate-200 lg:mt-[18px] md:mt-[15px]">Si lo puedes imaginar, lo puedes programar.</p>
                <div class="mt-7">
                <button class="sm:mx-auto flex bg-accent1 lg:px-[15px] px-[12px] xl:py-[12px] py-[10px] rounded-[2rem] text-[16px] xl:text-[18px] font-medium text-white items-center transition duration-300 relative after:absolute :after:content-[''] after:bg-primary after:h-full after:w-full after:bottom-0 after:left-0 after:rounded-[2rem] after:trasition after:duration-300 after:opacity-0 hover:after:opacity-[1]">
                    <span class="icon bg-[#EFEBEB] text-accent1 w-[34px] h-[34px] rounded-full flex items-center justify-center ltr:xl:mr-[15px] ltr:mr-[10px] rtl:xl:ml-[15px] rtl:ml-[10px] relative z-[8] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </span>
                    <span class="ltr:xl:pr-[5px] ltr:lg:pr-[5px] rtl:xl:pl-[5px] rtl:lg:pl-[5px] relative z-[8] flex-shrink-0">Download CV</span>
                </button>
                
                </div>
                <div class="gap-[18px] flex-wrap mt-[30px] sm:justify-center">
                <div class="flex items-center flex-wrap gap-[15px] sm:justify-center">
                    <span class="font-heebo lg:text-[22px] md:text-[18px] font-semibold shrink-0 text-primary dark:text-white">Sigueme: </span>
                    <div class="flex items-center">
                    <a :href="profile.NETWORKS.FACEBOOK" v-if="profile.NETWORKS.FACEBOOK !== '#'" class="w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full">
                        <svg  fill="currentColor" stroke="currentColor" width="13" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    </a>
                    <a :href="profile.NETWORKS.PINTEREST" v-if="profile.NETWORKS.PINTEREST !== '#'" class="w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full ltr:ml-[10px] rtl:mr-[10px]">
                        <svg fill="currentColor" stroke="currentColor" width="13" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
                    </a>
                    <a :href="profile.NETWORKS.TWITTER" v-if="profile.NETWORKS.TWITTER !== '#'" class="w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full ltr:ml-[10px] rtl:mr-[10px]">
                        <svg fill="currentColor" stroke="currentColor" width="13" height="14"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    </a>
                    <a :href="profile.NETWORKS.INSTAGRAM" v-if="profile.NETWORKS.INSTAGRAM !== '#'" class="w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full ltr:ml-[10px] rtl:mr-[10px]">                            
                        <svg fill="currentColor" stroke="currentColor" width="13" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    </div>
                </div> 
                </div>
            </div>
            <!-- profile content end -->

            <Menu />

        </div>
        <!-- Profile content and nav end -->

            <!-- Profile media start -->
            <div class="max-w-[405px] order-first">
            <div class="relative after:bg-white after:w-full after:bottom-0 after:left-0 after:content[''] after:h-[75%] after:absolute after:rounded-xl">
                <!-- Profile image start -->
                <div class="text-center pb-6 relative z-10 sm:px-4 lg:px-11">
                    <div class="pb-5">
                    <img class="md:w-[250px] md:h-[250px] lg:w-[290px] lg:h-[290px] rounded-full mx-auto border border-accent1 p-1" :src="profile.PROFILE_PICTURE" alt="">
                    </div>
                    <h4 class="text-primary">{{profile.FIRST_NAME}} {{profile.LAST_NAME}}</h4>
                    <span>{{profile.PROFESSION}}</span>
                </div>
                <!-- Profile image end -->

                <!-- Profile contact info  start -->
                <div class="border-t border-[#ddd] py-6 px-12 z-10 relative">
                    <!-- Single contact start -->
                    <div class="flex items-center">
                        <span class="border border-accent1 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                        <svg class="max-w-5" width="16" height="34" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        </span>
                        <span class="ltr:pl-4 rtl:pr-4 text-[18px]">
                        <a class="hover:text-accent1" :href="`tel:${profile.PHONE}`">{{profile.PHONE}}</a>
                        </span>
                    </div>
                    <!-- Single contact -->
                    
                    <!-- Single contact start -->
                    <div class="flex items-center mt-5">
                        <span class="border border-accent1 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="max-w-5 feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </span>
                        <span class="ltr:pl-4 rtl:pr-4 text-[18px]">
                        <a class="hover:text-accent1" href="mailto:exampal@gmail.com">{{profile.EMAIL}}</a>
                        </span>
                    </div>
                    <!-- Single contact -->

                    <!-- Single contact start -->
                    <div class="flex items-center mt-5">
                        <span class="border border-accent1 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                        <svg class="max-w-5" width="16" height="34" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                        </span>
                        <span class="ltr:pl-4 rtl:pr-4 text-[18px]">
                            {{profile.ADDRESS}}
                        </span>
                    </div>
                    <!-- Single contact -->

                </div>
                <!-- Profile contact info  end -->

            </div>
        </div>
        <!-- Profile media start -->

        </div>
    </section>
</template>
  
<script>
    import Menu from "../../src/components/layout/Menu.vue"
    import Profile from "../../src/utils/Profile"

    export default {
        name: "Home",
        data(){
            return {
            }
        },
        components:{
            Menu
        },
        computed:{
            profile(){
                return this.$store.state.user.profile;
            }
        }
    };
</script>