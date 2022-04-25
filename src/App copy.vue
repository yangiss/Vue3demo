<template>
  <div id="app">
    <!-- <CheckEditor :modelValue="checked" @update:modelValue="checkd = $event" /> -->
    <!-- 简写方式 -->
    <CheckEditor v-model="checked" v-model:title.trim="title" />
    <p>选中状态: {{ checked }}</p>
    <p>商品：{{ title }}</p>

    <div id="v-model-example" class="demo">
      <p>First name: {{ firstName }}</p>
      <p>Last name: {{ lastName }}</p>
      <user-name
        v-model:first-name="firstName"
        v-model:last-name="lastName"
      ></user-name>
    </div>



  </div>
</template>

<script>
import CheckEditor from "./components/CheckEditor.vue"
import UserName from "./components/UserName.vue"

const defaultSells = [
  {
    id: 1,
    sell: true,
    title: "iphone12",
  },
  { id: 2, sell: false, title: "xiaomi" },
  { id: 3, sell: true, title: "huawei" },
  { id: 4, sell: true, title: "vivo" }
]
export default {
  components: {
    CheckEditor,
    UserName
  },
  data() {
    return {
      checked: true,
      title: 'xiaomi',
      firstName: 'John',
      lastName: 'Doe',
    }
  },
  
};
</script>


<style scoped>
.container {
  margin-top: 50px;
  width: 880px;
  margin: 50px auto;
}
.list {
  display: flex;
  margin: 1em 0;
  align-items: center;
}
strong {
  margin-right: 1em;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>