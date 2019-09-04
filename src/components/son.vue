<template>
  <div class="text">
      <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button> -->
      <el-table
        ref="filterTable"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="filterTo"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          >
        </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        filterTo:[{text: '1', value: "1"}, {text: '2', value: "2"}, {text: '3', value: "3"}, {text: '4', value: "4"}],
         tableData: [{
          date: '1',
          name: null,
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2',
          name: null,
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '3',
          name: null,
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '4',
          name: null,
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
        
      }
    },
    methods: {
      // resetDateFilter() {
      //   this.$refs.filterTable.clearFilter('date');
      // },
      // clearFilter() {
      //   this.$refs.filterTable.clearFilter();
      // },
      // formatter(row, column) {
      //   return row.address;
      // },
      // filterTag(value, row) {
      //   return row.tag === value;
      // },
      filterHandler(value, row, column) {
        debugger;
        console.log(value)
        const property = column['property'];
        return row[property] === value.toString();
      }
    }
  }
</script>
<style lang="stylus">

</style>