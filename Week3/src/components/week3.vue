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
          <el-table
            style="width: 100%"
            stripe
            :data="leftlist"
            highlight-current-row
            :row-class-name="rowClassName"
            @row-click="whileClick"
          >
            <el-table-column>
              <template slot-scope="scope">
                <span class="word-position"></span>
                <el-col>
                  <el-row>
                    <div>
                      {{ leftlist[scope.$index].path }}
                    </div>
                  </el-row>
                  <el-row>
                    <div>
                      <el-tag effect="plain">
                        {{ leftlist[scope.$index].duration }}
                      </el-tag>
                      <span>{{ leftlist[scope.$index].startpoint }} </span>
                    </div>
                  </el-row>
                </el-col>
              </template>
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
              <div class="title">{{ leftlist[rownumber].path }}</div>
              <el-button type="primary" size="small">查看日志</el-button>
            </el-row>

            <el-row
              class="first-layer"
              type="flex"
              justify="space-between"
              align="middle"
            >
              <el-tag effect="plain" size="mini">
                {{ leftlist[rownumber].name }}
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
                <span>{{ leftlist[rownumber].startpoint }} </span>
                <el-tag effect="dark" type="info" size="mini">
                  持续时间
                </el-tag>
                <span>{{ leftlist[rownumber].duration }} </span>
                <el-tag effect="dark" type="info" size="mini"> 跨度 </el-tag>
                <span>{{ leftlist[rownumber].span }} </span>
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
      rownumber: 0,
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
          name: "a64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-11 22:17:59",
          duration: "64730 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "b64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-12 22:17:59",
          duration: "64731 ms",
          span: "21",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-13 22:17:59",
          duration: "64732 ms",
          span: "22",
        },
        {
          path: "/projectC/{value}",
          name: "d64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-14 22:17:59",
          duration: "64733 ms",
          span: "23",
        },
        {
          path: "/projectC/{value}",
          name: "e64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-15 22:17:59",
          duration: "64734 ms",
          span: "24",
        },
        {
          path: "/projectC/{value}",
          name: "f64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-16 22:17:59",
          duration: "64735 ms",
          span: "25",
        },
        {
          path: "/projectC/{value}",
          name: "g64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-17 22:17:59",
          duration: "64736 ms",
          span: "26",
        },
        {
          path: "/projectC/{value}",
          name: "h64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-18 22:17:59",
          duration: "64737 ms",
          span: "27",
        },
        {
          path: "/projectC/{value}",
          name: "i64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64738 ms",
          span: "28",
        },
        {
          path: "/projectC/{value}",
          name: "j64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64739 ms",
          span: "29",
        },
        {
          path: "/projectC/{value}",
          name: "a64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-11 22:17:59",
          duration: "64730 ms",
          span: "20",
        },
        {
          path: "/projectC/{value}",
          name: "b64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-12 22:17:59",
          duration: "64731 ms",
          span: "21",
        },
        {
          path: "/projectC/{value}",
          name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-13 22:17:59",
          duration: "64732 ms",
          span: "22",
        },
        {
          path: "/projectC/{value}",
          name: "d64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-14 22:17:59",
          duration: "64733 ms",
          span: "23",
        },
        {
          path: "/projectC/{value}",
          name: "e64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-15 22:17:59",
          duration: "64734 ms",
          span: "24",
        },
        {
          path: "/projectC/{value}",
          name: "f64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-16 22:17:59",
          duration: "64735 ms",
          span: "25",
        },
        {
          path: "/projectC/{value}",
          name: "g64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-17 22:17:59",
          duration: "64736 ms",
          span: "26",
        },
        {
          path: "/projectC/{value}",
          name: "h64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-18 22:17:59",
          duration: "64737 ms",
          span: "27",
        },
        {
          path: "/projectC/{value}",
          name: "i64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64738 ms",
          span: "28",
        },
        {
          path: "/projectC/{value}",
          name: "j64945c8-49c4-490c-a05d-9418e4d0a792",
          startpoint: "2021-03-19 22:17:59",
          duration: "64739 ms",
          span: "29",
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
    rowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    whileClick(row) {
      this.rownumber = row.index;
      console.log("number");
      console.log(row);
      console.log(row.index);
      console.log(this.rownumber);
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