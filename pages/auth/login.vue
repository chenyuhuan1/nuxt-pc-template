<!-- login -->
<template>
  <div class="login">
    <el-button type="primary" @click="login" >登录</el-button>
  </div>
</template>

<script>
import {setTokenFromStorage} from '@/assets/js/index'
import {login} from '@/assets/api/service.js'
export default {
  name: 'login',
  data () {
    return {
        
    };
  },
  created() {
    
  },
  mounted() {
  },
  methods: {
    login() {
      //获取token
      login('admin','xl123456').then(res => {
        setTokenFromStorage(res.data.data.token);
        this.$router.push({
          name: 'index'
        });
      });
    },
  },
}

</script>
<style lang='less' scoped>
</style>