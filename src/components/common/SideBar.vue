<template>
    <div class="h-full flex flex-col justify-between">
        <div>
            <!-- brand -->
            <div class="p-4 flex items-center gap-x-3 text-blue-600">
                <icon :size="20" name="disc" /> <strong>Poli Clinic</strong>
            </div>

            <!-- navs -->
            <nav class="mt-3" v-for="(list, index) in navList" :key="`list-item-${index}`">
                <small class="px-4 uppercase text-gray-400">{{ list.name }}</small>
                <router-link class="flex items-center gap-x-3 text-[#93B0C8] bg-white hover:bg-blue-100  border-white border-l-4 hover:text-blue-600 hover:border-blue-400 p-3" v-for="(nav, index) in list.navs" :to="nav.url" :key="`nav-item-${index}`">
                    <icon :size="20" :name="nav.icon" />
                    <span class="capitalize">{{ nav.title }}</span>
                </router-link>
            </nav>
        </div>

        <!-- bottom panel -->
        <div>
            <div class="p-5">
                <div class="rounded-xl bg-blue-50 p-5 flex flex-col gap-y-2 text-gray-500">
                    <strong>Covid Informations</strong>
                    <div class="flex items-center gap-x-2">
                        <icon name="globe" /> <span>World</span>
                    </div>
                    <div>Infected - <strong>8.119.575</strong></div>
                    <div>Recovered - <strong>4.231.974</strong></div>
                    <div>Deaths - <strong>439.217</strong></div>
                    <button class="bg-blue-600 hover:bg-blue-500 text-white py-3 w-full rounded-xl">Check Covid</button>
                </div>
            </div>
            <hr>
            <div class="p-5 flex flex-col">
                <small>@ Poli Clinic. 2020</small>
                <small class="text-gray-400">Poli Clinic is medical management for all doctors, patient & Staff.</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                { id: 1, name: 'managements', navs: [
                        { id: 1, title: 'overview', icon: 'grid', url: '/overview' },
                        { id: 1, title: 'staticstics', icon: 'bar-chart-2', url: '/staticstics' },
                        { id: 1, title: 'patients', icon: 'thermometer', url: '/patients' },
                        { id: 1, title: 'polyclinic', icon: 'clipboard', url: '/polyclinic' },
                        { id: 1, title: 'doctors', icon: 'users', url: '/doctors' },
                        { id: 1, title: 'medicines', icon: 'package', url: '/medicines' }
                    ]
                },
                { id: 1, name: 'support', navs: [
                        { id: 1, title: 'messages', icon: 'mail', url: '/messages' },
                        { id: 1, title: 'settings', icon: 'settings', url: '/settings' },
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>