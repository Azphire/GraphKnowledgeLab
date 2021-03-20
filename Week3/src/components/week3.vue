<template>
  <div class="week3">
    <el-container>
      <el-aside width="250px">
        <div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[4, 5, 6, 7, 8]"
            :current-page="currentPage"
            :page-size="pagesize"
            :total="4"
            layout="total, sizes, prev, pager, next, jumper"
          >
          </el-pagination>
        </div>
        <div>
          <el-table style="width: 100%" stripe :data="leftlist">
            <el-table-column>
              <el-col>
                <el-row>
                  <div>
                    {{ leftlist[0].path }}
                  </div>
                </el-row>
                <el-row>
                  <div>
                    <el-tag effect="plain">
                      {{ leftlist[0].duration }}
                    </el-tag>
                    <span>{{ leftlist[0].startpoint }} </span>
                  </div>
                </el-row>
              </el-col>
            </el-table-column>
          </el-table>
        </div>
      </el-aside>

      <el-container>
        <el-header>
          <div>
            <el-row
              class="first-layer"
              type="flex"
              justify="space-between"
              align="middle"
            >
              <div class="title">{{ leftlist[0].path }}</div>
              <el-button type="primary" size="small">查看日志</el-button>
            </el-row>

            <el-row
              class="first-layer"
              type="flex"
              justify="space-between"
              align="middle"
            >
              <el-tag effect="plain" size="mini">
                {{ leftlist[0].name }}
              </el-tag>
            </el-row>

            <el-row
              class="first-layer"
              type="flex"
              justify="space-between"
              align="middle"
            >
              <el-col>
                <el-tag effect="dark" type="info" size="mini"> 起始点 </el-tag>
                <span>{{ leftlist[0].startpoint }} </span>
                <el-tag effect="dark" type="info" size="mini">
                  持续时间
                </el-tag>
                <span>{{ leftlist[0].duration }} </span>
                <el-tag effect="dark" type="info" size="mini"> 跨度 </el-tag>
                <span>{{ leftlist[0].span }} </span>
              </el-col>
              <el-col
                ><el-button type="mini">列表</el-button>
                <el-button type="mini">树结构</el-button>
                <el-button type="mini">表格</el-button></el-col
              >
            </el-row>
          </div></el-header
        >

        <el-main>
          树状图
          <div id="echart" style="width: 800px; height: 400px"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Week3",
  data() {
    return {
      currentPage: 1,
      pagesize: 2,
      tree: {
        path: "/projectC/{value}",
        name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
        startpoint: "2021-03-19 22:17:59",
        duration: "64737 ms",
        span: "20",
        children: [
          {
            name: "/projectA/test",
            value: "Http-Nginx",
            children: [
              {
                name: "/projectA/test",
                value: "Http-Nginx",
                children: [
                  {
                    name: "/projectA/test",
                    value: "Http-Nginx",
                    children: [
                      {
                        name: "/projectA/test",
                        value: "Http-Nginx",
                        children: [
                          {
                            name: "/projectA/{name}",
                            value: "Http-SpringMVC",
                            children: [
                              {
                                name: "/projectB/test",
                                value: "Http-SpringRestTemplate",
                                children: [
                                  {
                                    name: "/projectB/{value}",
                                    value: "Http-SpringMVC",
                                    children: [
                                      {
                                        name:
                                          "test.skywalking.springcloud.test.projectb.dao.DatabaseOperateDao.saveUser(java.lang.String)",
                                        value: "Unknown-Unknown",
                                        children: [
                                          {
                                            name:
                                              "H2/JDBI/PreparedStatement/execute",
                                            value: "Database-h2-jdbc-driver",
                                          },
                                        ],
                                      },
                                      {
                                        name: "selectUser",
                                        value: "Unknown-Unknown",
                                        children: [
                                          {
                                            name:
                                              "H2/JDBI/PreparedStatement/execute",
                                            value: "Database-h2-jdbc-driver",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "Balancer/projectC/{name}",
                                value: "Http-Feign",
                                children: [
                                  {
                                    name: "/projectC/test",
                                    value: "Http-Feign",
                                    children: {
                                      name: "/projectC/{value}",
                                      value: "Http-SpringMVC",
                                      children: [
                                        {
                                          name: "/",
                                          value: "Http-HttpClient",
                                        },
                                        {
                                          name:
                                            "Kafka/test-trace-topic/Producer",
                                          value: "MQ-kafka-producer",
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    name: "/projectC/test",
                                    value: "Http-Feign",
                                    children: [
                                      {
                                        name: "/projectC/{value}",
                                        value: "Http-SpringMVC",
                                        children: [
                                          {
                                            name: "/",
                                            value: "Http-HttpClient",
                                          },
                                          {
                                            name:
                                              "Kafka/test-trace-topic/Producer",
                                            value: "MQ-kafka-producer",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      leftlist: [
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64737 ms",
          span: "20",
        },
      ],
    };
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = currentPage;
    },
    echartsInit() {
      this.$echarts.init(document.getElementById("echart")).setOption({
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",

            data: [this.tree],

            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",

            symbolSize: 7,

            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 9,
            },

            roam: true,

            initialTreeDepth: -1,

            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
              },
            },

            emphasis: {
              focus: "descendant",
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
</style>