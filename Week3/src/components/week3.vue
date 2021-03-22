<template>
  <div class="week3">
    <el-container>
      <el-aside width="300px">
        <div>
          <el-pagination
            style="width: 100%"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :pager-count="2"
            :page-sizes="[4, 5, 6, 14, 15]"
            :current-page="currentPage"
            :page-size="pagesize"
            :total="totalNum"
            layout="total, sizes, prev, pager, next, jumper"
            
          >
          </el-pagination>
        </div>
        <div>
          <el-table
            stripe
            :data="leftlist.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            highlight-current-row
            :row-class-name="rowClassName"
            @row-click="whileClick"
          >

          
              <el-table-column prop="path">
                  <template slot-scope="scope">
                    <el-row>
                      <div>{{scope.row.path}}</div>
                    </el-row>
                    <el-row>
                      <div>
                              <el-tag effect="plain">
                                {{ scope.row.duration }}
                              </el-tag>
                              <span>{{ scope.row.startpoint }} </span>
                            </div>
                    </el-row>
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
      
      totalNum:21,

      rownumber: 0,
      currentPage: 1,
      pagesize: 2,
      tree: {
        path: "/projectC/{value}",
        name: "c64945c8-49c4-490c-a05d-9418e4d0a792",
        startpoint: "2021-03-19 22:17:59",
        duration: "64737 ms",
        span: "20",
        type: "single",
        children: [
          {
            path: "/projectA/test",
            name: "Http-Nginx",
            type: "single",
            position: [-120, 50],
            children: [
              {
                path: "/projectA/test",
                name: "Http-Nginx",
                type: "single",
                children: [
                  {
                    path: "/projectA/test",
                    name: "Http-Nginx",
                    type: "single",
                    children: [
                      {
                        path: "/projectA/test",
                        name: "Http-Nginx",
                        type: "single",
                        children: [
                          {
                            path: "/projectA/{name}",
                            name: "Http-SpringMVC",
                            type: "single",
                            children: [
                              {
                                path: "/projectB/test",
                                name: "Http-SpringRestTemplate",
                                type: "branch",
                                children: [
                                  {
                                    path: "/projectB/{value}",
                                    name: "Http-SpringMVC",
                                    type: "branch",
                                    children: [
                                      {
                                        path:
                                          "test.skywalking.springcloud.test.projectb.dao.DatabaseOperateDao.saveUser(java.lang.String)",
                                        name: "Unknown-Unknown",
                                        type: "single",
                                        children: [
                                          {
                                            path:
                                              "H2/JDBI/PreparedStatement/execute",
                                            name: "Database-h2-jdbc-driver",
                                            type: "leaf",
                                          },
                                        ],
                                      },
                                      {
                                        path: "selectUser",
                                        name: "Unknown-Unknown",
                                        type: "single",
                                        children: [
                                          {
                                            path:
                                              "H2/JDBI/PreparedStatement/execute",
                                            name: "Database-h2-jdbc-driver",
                                            type: "leaf",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                path: "Balancer/projectC/{name}",
                                name: "Http-Feign",
                                type: "branch",
                                children: [
                                  {
                                    path: "/projectC/test",
                                    name: "Http-Feign",
                                    type: "branch",
                                    children: {
                                      path: "/projectC/{value}",
                                      name: "Http-SpringMVC",
                                      type: "branch",
                                      children: [
                                        {
                                          path: "/",
                                          name: "Http-HttpClient",
                                          type: "leaf",
                                        },
                                        {
                                          path:
                                            "Kafka/test-trace-topic/Producer",
                                          name: "MQ-kafka-producer",
                                          type: "leaf",
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    path: "/projectC/test",
                                    name: "Http-Feign",
                                    type: "branch",
                                    children: [
                                      {
                                        path: "/projectC/{value}",
                                        name: "Http-SpringMVC",
                                        type: "branch",
                                        children: [
                                          {
                                            path: "/",
                                            name: "Http-HttpClient",
                                            type: "leaf",
                                          },
                                          {
                                            path:
                                              "Kafka/test-trace-topic/Producer",
                                            name: "MQ-kafka-producer",
                                            type: "leaf",
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
      this.currentPage=1
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
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

            symbol: "emptyCircle",
            // symbol: 'image://'+ require('../assets/node.png'),

            symbolSize: "10",

            itemStyle:{
              color: '#2F96E0'
            },

            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",
            

            // label: {
            //   position: "left",
            //   verticalAlign: "middle",
            //   align: "right",
            //   fontSize: 9,
            // },
            label: {
              width: "90",
              height: "50,",
              overflow: 'truncate',
              formatter: function (params) {
                var arr = [
                    '{a|' + params.data.path + '}',
                    '{b|        }{c|                   }',
                    '{x|' + params.data.name + '}'
                ]
                // console.log(params)
                return arr.join('\n');
              }, 
              // 这里是文本块的样式设置：
              // position: function (params) {
              //   var arr = [-120, -8]
              //   if (params.data.type == "branch") {
              //     arr = [-120, -40]
              //     console.log(params.data.name)
              //   };
              //   return arr;
              // }, 
              position: [-100 , -8],
              // position: "left",
              // position: params.data.position,
              color: '#333',
              fontSize: 5,
              fontFamily: 'Arial',
              borderWidth: 3,
              // backgroundColor: '#ffffff',
              // padding: [3, 10, 10, 5],
              lineHeight: 20,

              // rich 里是文本片段的样式设置：
              rich: {
                  a: {
                      color: 'black',
                      fontSize: 12,
                      lineHeight: 5
                  },
                  b: {
                      backgroundColor: '#2F96E0',
                      height: 3
                  },
                  c :{
                      backgroundColor: '#D2D2D2',
                      height: 3
                  },
                  x: {
                      fontSize: 12,
                      fontFamily: 'Microsoft YaHei',
                      color: '#D2D2D2',
                      lineHeight: 5
                  }
              }
          },
          // labelLayout: {
          //   verticalAlign: "middle",
          // },
          // labelLayout: function (params) {
          //   var arr = [-120, -8]
          //   console.log(params)
          //     // if (params.data.type == "branch") {
          //     //   arr = [-120, -40]
          //       // console.log(params.data.name)
          //     // };
          //     if (params.dataIndex == 1){
          //       arr = [-120, -12]
          //     }
          //     return arr;
          // },

            roam: true,

            initialTreeDepth: -1,

            leaves: {
              label: {
              width: "90",
              height: "50,",
              formatter: function (params) {
                var arr = [
                    '{a|' + params.data.path + '}',
                    '{b|        }{c|                   }',
                    '{x|' + params.data.name + '}'
                ]
                // console.log(params)
                return arr.join('\n');
              },
                // 这里是文本块的样式设置：
                color: '#333',
                fontSize: 5,
                fontFamily: 'Arial',
                borderWidth: 3,
                // backgroundColor: '#984455',
                padding: [3, 10, 10, 5],
                lineHeight: 20,
                position: [20 , -12],

                // rich 里是文本片段的样式设置：
                rich: {
                  a: {
                      color: 'black',
                      fontSize: 12,
                      lineHeight: 5
                  },
                  b: {
                      backgroundColor: '#2F96E0',
                      height: 3
                  },
                  c :{
                      backgroundColor: '#D2D2D2',
                      height: 3
                  },
                  x: {
                      fontSize: 12,
                      fontFamily: 'Microsoft YaHei',
                      color: '#D2D2D2',
                      lineHeight: 5
                  }
                }
              }
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
    }
  },
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
</style>
