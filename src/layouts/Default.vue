<template>
<div class="w-screen min-h-screen flex flex-col">
    <div class="flex h-full">
        <aside class="w-[260px] shadow-xl z-50">
            <side-bar />
        </aside>
        <main class="flex-1 bg-blue-50">
            <nav>
                <nav-bar />
            </nav>
            <router-view />
            <!-- <footer>Footer</footer> -->
        </main>
    </div>
</div>
</template>

<script setup>
import NavBar from '@/components/common/NavBar.vue';
import SideBar from '@/components/common/SideBar.vue';

</script>
