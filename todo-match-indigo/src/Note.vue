<template>
    <div id="app">
        <transition name="translate">
            <!--增加缓存-->
            <ul class="filters">
                <router-view class="pos"></router-view>
            </ul>
        </transition>
        <tab></tab>
    </div>
</template>
<script>
    //引入导航组建
    import Tab from './components/Tab.vue';

    export default {
        components: {
            Tab
        }
    }
</script>
<style scoped>
    /**/
</style>