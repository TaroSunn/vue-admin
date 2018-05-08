<template>
    <div class="instructions">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <div class="info">
                <p>后台管理系统</p>
                <p>数据根据mock.js自动生成的</p>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {
        data () {
            return {
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>
    .instructions .info{
        width: 80%;
        margin: 0 auto;
    }
    .instructions .info p{
        text-align: center;
        padding: 10px 0;
    }
</style>