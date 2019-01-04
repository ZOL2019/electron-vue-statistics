<template>
    <div>
        <el-button @click="incrment_main_counter">+</el-button>
        <el-button @click="decrement_main_counter">-</el-button>
        <label>{{Counter}}</label>
    </div>
</template>

<script>
    import xlsx from '../../utils/xlsx'
    export default {
      name: 'TestPage',
      data () {
        return {

        }
      },
      computed: {
        Counter () {
          // 计数器
          return this.$store.state.Counter.main
        }
      },
      created () {
        const model = xlsx.xlsxtoJson('', 'test')
        console.error(model.data)
        console.error(model.data[0])
        console.error(model.data[1])
        for (let i = 1; i < model.data.length; i++) {
          console.error(model.data[i])
          for (let j = 0; j < model.data[i].length; j++) {
            console.error(model.data[i][j])
          }
        }
        const data = [{
          name: null,
          data: [
            [null, null, null],
            [null, null, null],
            [1, 2, 3]
          ]
        }]
        xlsx.jsontoXlsx('', 'test1', data)
      },
      methods: {
        decrement_main_counter () {
          this.$store.dispatch('DECREMENT_MAIN_COUNTER')
        },
        incrment_main_counter () {
          this.$store.dispatch('INCREMENT_MAIN_COUNTER')
        }
      }
    }
</script>

<style scoped lang="scss">
    .box {
        margin:10px 0 0 -6px;
        width: 460px;
        height: 748px;
        background: rgba(24, 58, 105, 0.3);
        overflow: hidden;
        position: absolute;
        .inner-box {
            overflow-x: hidden;
            overflow-y: auto;
            height: 100%;
            cursor: pointer;
        }

        .inner-box::-webkit-scrollbar { /*滚动条整体样式*/
            width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 175px;
        }

        .inner-box::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0, 165, 251, 0.7);
            background: rgba(0, 165, 251, 0.7);
        }

        .inner-box::-webkit-scrollbar-track { /*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(6, 88, 211, 0.4);
            border-radius: 5px;
            background: rgba(6, 88, 211, 0.4);
        }
    }
</style>