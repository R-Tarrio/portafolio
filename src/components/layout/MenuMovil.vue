<template>
    <div class="toggle__navigation fixed ltr:left-[30px] rtl:right-[30px] top-[30px] z-50 pointer-events-none md:hidden">
        <button class="toggle__navigation--button bg-accent1 w-[60px] h-[60px] rounded-full absolute z-50 top-0 ltr:left-0 rtl:right-0 overflow-hidden pointer-events-auto whitespace-nowrap" aria-label="Menu navigation">
            <span class="left-[50%] top-[50%] bottom-auto right-auto translate-x-[-50%] translate-y-[-50%] absolute w-5 h-[2px] bg-white after:absolute after:content[''] after:left-0 after:top-0 after:w-5 after:h-[2px] after:bg-white after:translate-y-[6px] before:absolute before:content[''] before:left-0 before:top-0 before:w-5 before:h-[2px] before:bg-white before:translate-y-[-6px]"></span>
        </button>
        <ul class="toggle__nav--menu relative z-20 invisible text-left pt-[53px] pb-[22px]">
            <li>
                <a href="/" class="flex items-center">
                    <span class="relative z-10 ltr:pl-5 rtl:pr-5 toggle__nav--menu-icon opacity-0 text-accent1">
                        <svg width="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                    </span>
                    <span class="toggle__nav--menu--label-wrapper relative block h-[45px] leading-[45px] text-primary dark:text-white uppercase text-[16px] before:content[''] before:absolute before:w-[3px] before:h-[16px] before:top-[50%] ltr:before:left-[20px] rtl:before:right-[18px]">
                        <span class="toggle__nav--menu--label font-bold font-heebo block opacity-0">Home</span>
                    </span>
                </a>
            </li>

            <li class="active">
                <a href="about" class="flex items-center">
                    <span class="relative z-10 ltr:pl-5 rtl:pr-5 toggle__nav--menu-icon opacity-0 text-accent1">
                        <svg width="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    </span>
                    <span class="toggle__nav--menu--label-wrapper relative block h-[45px] leading-[45px] text-primary dark:text-white uppercase text-[16px] before:content[''] before:absolute before:w-[3px] before:h-[16px] before:top-[50%] ltr:before:left-[20px] rtl:before:right-[18px]">
                        <span class="toggle__nav--menu--label font-bold font-heebo block opacity-0">About</span>
                    </span>
                </a>
            </li>
        </ul>
        <span aria-hidden="true" class="toggle__nav--menu--bg absolute z-10 top-0 ltr:left-0 rtl:right-0 w-[60px] h-[60px] rounded-[30px] bg-white"></span>
    </div>
</template>