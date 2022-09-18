<template>
  <h1>This is WebSocket page!</h1>
  <div>
    <input type="text" name="userId" id="userId" v-model="user.userId">
    <input type="button" value="确定" id="submit" v-on:click="submit()">
  </div>
</template>

<script>

export default {
  name: "WebSocket",
  data() {
    return {
      user: {
        userId: 1
      }
    }
  },
  mounted() {
    this.connectWebsocket();
  },
  methods: {
    submit() {
      this.connectWebsocket();
    },
    connectWebsocket() {
      console.log(this.user.userId)
      let websocket;
      if (typeof WebSocket === "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        let protocol = "ws";
        let url = "";
        if (window.location.protocol === "https:") {
          protocol = "wss";
        }
        url = `${protocol}://127.0.0.1:8080/webSocket/${this.user.userId}`;
        websocket = new WebSocket(url);
        websocket.onopen = () => {
          websocket.send("用户" + this.user.userId + ",测试数据请求")
          console.log("websocket发送数据中");
        }
        websocket.onmessage = res => {
          console.log("websocket返回的数据：", res.data);
        }
        websocket.onerror = evt => {
          console.log("websocket错误：", evt);
        };
        // 关闭连接
        websocket.onclose = evt => {
          console.log("websocket关闭：", evt);
        };
      }
    }
  }
}

</script>

<style>

</style>