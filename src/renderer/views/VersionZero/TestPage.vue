<template>
    <div>
        <el-button @click="incrment_main_counter">+</el-button>
        <el-button @click="decrement_main_counter">-</el-button>
        <label>{{Counter}}</label>
    </div>
</template>

<script>
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

<style scoped>

</style>