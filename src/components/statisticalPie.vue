<template>
    <div class="statistical_pie">
        <div id="statistical_pie"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    // 引入饼图
    import 'echarts/lib/chart/pie'
    export default {
        mounted () {
            this.mychart = echarts.init(document.getElementById('statistical_pie'));
            this.initData();
        },
        methods: {
            initData () {
                const option = {
                        title : {
                            text: '用户访问来源',
                            subtext: 'abc',
                            x:'center'
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                        },
                        series : [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius : '55%',
                                center: ['50%', '60%'],
                                data:[
                                    {value:335, name:'直接访问'},
                                    {value:310, name:'邮件营销'},
                                    {value:234, name:'联盟广告'},
                                    {value:135, name:'视频广告'},
                                    {value:1548, name:'搜索引擎'}
                                ],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                this.mychart.setOption(option);
            }
        }
    }
</script>

<style>
    .statistical_pie{
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
    }
    .statistical_pie #statistical_pie{
        width: 100%;
        height: 450px;
    }
</style>
