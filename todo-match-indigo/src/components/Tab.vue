<template>
    <nav class="footer">
        <router-link to="/all">
                <li><a href="/all" :class="{ selected: visibility == 'all' }">All</a></li>
        </router-link>
        <router-link to="/active">
                <li><a href="/active" :class="{ selected: visibility == 'active' }">Active</a></li>
        </router-link>
        <router-link to="/completed">
                <li><a href="/completed" :class="{ selected: visibility == 'completed' }">Completed</a></li>
        </router-link>
    </nav>
</template>
<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>