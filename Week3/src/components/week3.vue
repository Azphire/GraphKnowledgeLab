<template>
  <div class="week3">
    <el-container>
      <el-aside width="200px">
        <div>边栏</div>
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
              <div class="title">/projectC/{value}</div>
              <el-button type="primary">主要按钮</el-button>
            </el-row>

            <el-row
              class="first-layer"
              type="flex"
              justify="space-between"
              align="middle"
            >
              <div>number</div>
            </el-row>

            <el-row
              class="first-layer"
              type="flex"
              justify="space-between"
              align="middle"
            >
              <div>起始点： 持续时间： 跨度：</div>
              <el-button type="primary" size="small">主要按钮</el-button>
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
      tree: {
        name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
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
    };
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
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