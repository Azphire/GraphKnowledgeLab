<template>
    <div class="week3">
        <el-container>
            <el-header>顶栏</el-header>
            <el-aside width="200px">
                <div>边栏</div>
            </el-aside>
            <el-main>
                树状图
                <div id="echart" style="width:400px;height:400px;"></div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Week3',
    data () {
    return {
    }
    },
    mounted (){
		this.echartsInit()
	},
    methods: {
    echartsInit () {
		this.$echarts.init(document.getElementById('echart')).setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
			})
		}

    }

}
</script>