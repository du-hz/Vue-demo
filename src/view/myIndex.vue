<template>
  <div>
    <input type="text" v-model="textValue">
    <ul v-for="(val, idx) in list" :key="idx">
      <li v-html="colorFn(val.test, textValue)"></li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      textValue: '',
      list: [
        {
          test: '高亮显示'
        }, {
          test: '高显示'
        }, {
          test: '实  高  在是高'
        }, {
          test: '实高啊'
        }, {
          test: '6666'
        }, {
          test: '高'
        }
      ]
    }
  },
  methods: {
    // colorFn() {
      
    // }
    colorFn(originVal, target) {
      const reg = new RegExp(target, 'gi');
      console.log(originVal.replace(reg, `<span style="color: red;">${target}</span>`))
      return originVal.replace(reg, `<span style="color: red;">${target}</span>`)
      // return originVal.replace(target, `<span style="color: red;">${target}</span>`)
    }
  }
}
</script>

<style>

</style>
