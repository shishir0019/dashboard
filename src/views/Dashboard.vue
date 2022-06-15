<template>
    <div v-if="!loading" class="p-5 flex flex-col gap-y-5">
        <div class="flex justify-between items-center">
            <div class="flex flex-col">
                <strong>Poli Overview</strong>
                <small class="text-gray-400">welcome Back. Barly</small>
            </div>
            <button class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-x-2 rounded-xl"><icon name="plus" /> Register Patient</button>
        </div>

        <div class="flex gap-x-5">

            <!-- left -->
            <div class="flex-1 flex flex-col gap-y-5">
                <div class="flex-1 flex flex-col gap-y-5">

                    <div class="flex gap-x-5">
                        <div class="flex gap-x-3 w-1/3 bg-white p-4 rounded-xl" v-for="(counter, index) in counters" :key="`counter-item-${index}`">
                            <div class="w-14 h-14 flex justify-center items-center rounded-xl bg-green-50">
                                <img class="w-8 h-8" src="https://i.ibb.co/r4nbfcg/download.png" alt="">
                            </div>
                            <div class="flex flex-col">
                                <span class="text-gray-400">{{ counter.title }}</span>
                                <strong class=" text-xl">{{ format(counter.value) }}</strong>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl p-5 flex flex-col gap-y-3">
                        <div class="flex justify-between items-center">
                            <strong>{{ covid_report.title }}</strong>
                            <div class="flex p-2 rounded-xl bg-blue-50 gap-x-2">
                                <button class="rounded-lg flex justify-center items-center bg-white text-blue-500 px-3 py-1">Month</button>
                                <button class="rounded-lg flex justify-center items-center text-gray-500 px-3 py-1 hover:bg-white hover:text-blue-500">Week</button>
                            </div>
                        </div>
                        <line-chart :chartData="covid_report" />
                    </div>
                </div>
                <div class="flex gap-x-5">
                    <div class="w-1/2 bg-white p-5 flex flex-col gap-y-3 rounded-xl">
                        <div class="flex justify-between items-center">
                            <strong>{{ report_by_gender.title }}</strong>
                            <button class="p-1 border rounded-lg w-8 h-8 flex items-center justify-center gap-x-0.5 hover:bg-blue-200">
                                <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                                <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                                <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                            </button>
                        </div>
                        <div>
                            <doughnut-chart :chartData="report_by_gender" :options="options"/>
                        </div>
                    </div>
                    <div class="w-1/2 bg-white p-5 flex flex-col gap-y-3 rounded-xl">
                        <div class="flex justify-between items-center">
                            <strong>{{ report_by_group.title }}</strong>
                            <button class="p-1 border rounded-lg w-8 h-8 flex items-center justify-center gap-x-0.5 hover:bg-blue-200">
                                <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                                <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                                <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                            </button>
                        </div>
                        <div>
                            <doughnut-chart :chartData="report_by_group" :options="options"/>
                        </div>
                    </div>
                </div>

            </div>

            <!-- right -->
            <div class="w-full max-w-[400px] flex flex-col gap-y-5">
                <!-- informations -->
                <div class="rounded-xl p-5 bg-white flex flex-col gap-y-3">
                    <div class="flex justify-between items-center">
                        <strong>Informations</strong>
                        <button class="p-1 border rounded-lg w-8 h-8 flex items-center justify-center gap-x-0.5 hover:bg-blue-200">
                            <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                            <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                            <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                        </button>
                    </div>
                    <div class="">
                        <div class="p-2 rounded-lg border inline-block ">
                            <select name="" class="focus:outline-none">
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">Novenber</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex">
                        <button v-for="(cal, index) in calenterData" :key="index" class="inline-flex flex-col gap-y-2 items-center w-full hover:bg-blue-50 hover:text-blue-500 px-2 py-4 rounded-full cursor-pointer" :class="{ 'hover:bg-transparent': !cal.isActive, 'text-gray-300': !cal.isActive, 'hover:text-gray-300': !cal.isActive }" :disabled="!cal.isActive">
                            <div>{{ cal.day }}</div>
                            <div>{{ cal.date }}</div>
                        </button>
                    </div>
                    <div><span>Appointment List</span></div>

                    <div class="bg-blue-50 rounded-xl p-4 flex flex-col gap-y-3 relative">
                        <div class="flex gap-x-3">
                            <div class="w-16 h-16 flex justify-center items-center rounded-xl bg-blue-200">
                                <img class="w-8 h-8" src="https://i.ibb.co/r4nbfcg/download.png" alt="">
                            </div>
                            <div class="flex flex-col">
                                <strong>Covid Swab Test</strong>
                                <small class="text-gray-400">8:00 AM - 4:00 PM</small>
                                <small>240 Participants</small>
                            </div>
                        </div>
                        <div class="flex">
                            <span v-for="(item, index) in swabData" :key="`swab-item-${index}`" class="flex justify-center items-center rounded-full w-8 h-8 -mr-3 hover:z-10 text-white cursor-pointer" :class="item.color">
                                <small>{{ item.name }}</small>
                            </span>
                        </div>
                        
                        <button class="flex justify-center items-center cursor-pointer bg-blue-600 hover:bg-blue-500 text-white w-10 h-10 rounded-xl rounded-tr-none rounded-bl-none absolute bottom-0 right-0">
                            <icon name="chevron-left" :size="22" />
                        </button>
                    </div>

                    <div class="bg-blue-50 rounded-xl p-4 flex flex-col gap-y-3 relative">
                        <div class="flex gap-x-3">
                            <div class="w-16 h-16 flex justify-center items-center rounded-xl bg-blue-200">
                                <img class="w-8 h-8" src="https://i.ibb.co/r4nbfcg/download.png" alt="">
                            </div>
                            <div class="flex flex-col">
                                <strong>Covid Rapid Test</strong>
                                <small class="text-gray-400">9:00 AM - 5:00 PM</small>
                                <small>240 Participants</small>
                            </div>
                        </div>
                        <div class="flex">
                            <span v-for="(item, index) in swabData" :key="`swab-item-${index}`" class="flex justify-center items-center rounded-full w-8 h-8 -mr-3 hover:z-10 text-white cursor-pointer" :class="item.color">
                                <small>{{ item.name }}</small>
                            </span>
                        </div>
                        
                        <button class="flex justify-center items-center cursor-pointer bg-blue-600 hover:bg-blue-500 text-white w-10 h-10 rounded-xl rounded-tr-none rounded-bl-none absolute bottom-0 right-0">
                            <icon name="chevron-left" :size="22" />
                        </button>
                    </div>
                </div>

                <!-- polyclinic Division -->
                <div class="rounded-xl p-5 bg-white flex flex-col gap-y-5">
                    <div class="flex justify-between items-center">
                        <strong>Polyclinic Division</strong>
                        <button class="p-1 border rounded-lg w-8 h-8 flex items-center justify-center gap-x-0.5 hover:bg-blue-200">
                            <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                            <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                            <span class=" w-1 h-1 rounded-full bg-slate-500"></span>
                        </button>
                    </div>
                    <div class="flex gap-x-3 bg-white rounded-xl">
                        <div class="w-14 h-14 flex justify-center items-center rounded-xl bg-green-50">
                            <img class="w-8 h-8" src="https://i.ibb.co/r4nbfcg/download.png" alt="">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <strong class="">Total Patients</strong>
                            <small class="text-gray-400">Open: 07:00 - 11:00 AM</small>
                        </div>
                    </div>
                    <div class="flex gap-x-3 bg-white rounded-xl">
                        <div class="w-14 h-14 flex justify-center items-center rounded-xl bg-orange-50">
                            <img class="w-8 h-8" src="https://i.ibb.co/r4nbfcg/download.png" alt="">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <strong class="">Total Patients</strong>
                            <small class="text-gray-400">Open: 07:00 - 11:00 AM</small>
                        </div>
                    </div>
                    <div class="flex gap-x-3 bg-white rounded-xl">
                        <div class="w-14 h-14 flex justify-center items-center rounded-xl bg-blue-50">
                            <img class="w-8 h-8" src="https://i.ibb.co/r4nbfcg/download.png" alt="">
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <strong class="">Total Patients</strong>
                            <small class="text-gray-400">Open: 07:00 - 11:00 AM</small>
                        </div>
                    </div>
                    <button class="p-3 bg-blue-50 hover:bg-blue-200 hover:text-blue-500 rounded-xl">See More Polyclinic</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DoughnutChart, LineChart, PieChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import { GetDashboardAPI } from '../api'

Chart.register(...registerables);

export default {
    components: { DoughnutChart, LineChart, PieChart },
    data(){
        return {
            chartColor: ['#0079AF', '#6cddd6', '#dddddd'],
            loading: false,
            counters: [],
            covid_report: null,
            report_by_gender: null,
            report_by_group: null,
            options: {
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            },
            calenterData: [
                { date: 16, day: 'Mon', isActive: true },
                { date: 17, day: 'Tue', isActive: true },
                { date: 18, day: 'Wed', isActive: true },
                { date: 19, day: 'Thu', isActive: true },
                { date: 20, day: 'Fri', isActive: true },
                { date: 21, day: 'Sat', isActive: true },
                { date: 22, day: 'Sun', isActive: true },
                { date: 23, day: 'Mon', isActive: false },
            ],
            swabData: [
                { name: 'JK', color: 'bg-blue-500' },
                { name: 'BV', color: 'bg-green-500' },
                { name: 'CR', color: 'bg-red-500' },
                { name: 'FB', color: 'bg-blue-900' },
                { name: '50+', color: 'bg-gray-500' },
            ]
        }
    },
    methods: {
        format(number) {
            return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
        },
        fetchData(){
            this.loading = true;
            GetDashboardAPI().then(res => {
                this.counters = res.counters;
                this.report_by_gender = {
                    title: res.report_by_gender[0].title,
                    labels: res.report_by_gender[0].types,
                    datasets: [{
                        backgroundColor: this.chartColor,
                        data: res.report_by_gender[0].values
                    }]
                };
                this.report_by_group = {
                    title: res.report_by_group[0].title,
                    labels: res.report_by_group[0].types,
                    datasets: [{
                        backgroundColor: this.chartColor,
                        data: res.report_by_group[0].values
                    }]
                };
                this.covid_report = {
                    title: res.covid_report.title,
                    labels: res.covid_report.categories,
                    datasets: res.covid_report.types.map((item, index) => {
                        return {
                            label: item,
                            data: res.covid_report.values[index],
                            fill: false,
                            borderColor: this.chartColor[index],
                            tension: 0.4
                        }
                    })
                };

            }).then(() => {
                this.loading = false;
            })
        },
    },

    created(){
        this.fetchData();
    }
}
</script>

<style>
</style>