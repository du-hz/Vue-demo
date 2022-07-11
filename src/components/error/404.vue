<template>
  <div class="box">
    <div class="error">
      <div @click="btnClick">404</div>
      <ul>
        <li v-for="(val, ind) in arr" :key="ind">{{val}}</li>
        <li>{{obj.name}}</li>
        <li>{{obj.age}}</li>
        <li>{{obj.a}}</li>
        <li>{{obj.b}}</li>
        <li>{{obj.c}}</li>
        <li>{{message}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arr: ['dhz', 'br', 'xf'],
      obj: {
        age: 18
      },
      message: '杜宏征'
    }
  },
  methods: {
   btnClick() {
    this.arr.splice(0, 1, 'duhongzheng')
    // this.$set(this.arr, 3, 'mh');
    // this.$set(this.arr, 2, 'jk');
    // this.$set(this.obj, 'name', 'dhz')
    this.obj = Object.assign({}, this.obj, {a: 1, b: 2, c: 3})
    delete this.obj.age;
    // 效果相同
    // this.arr.length = 2;
    // this.arr.splice(2)

    this.message = 'new message!';
    this.$nextTick(() => {  // 更新数据要用到
      console.log(this.message)
    })

    // 数据更新，视图未更新
    // this.arr[2] = 'jk'
    // this.obj.name = 200;
    console.log(this.arr, this.obj, this.message)
   }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
.error {
  width: 100%;
  height: 100%;
  display: flex;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
