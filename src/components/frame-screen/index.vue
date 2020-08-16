<template>
  <div class="detail" v-if="type === 'detail'">
    <div>
      <div class="icon">icon</div>
      <div class="auth">auth</div>
    </div>
    <div class="title">title</div>
    <div class="time">time</div>
    <div class="content">content</div>
    <div class="content">content</div>
    <div class="content">content</div>
  </div>
  <div class="list" v-else-if="'list'">
    <div class="banner">banner</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
  </div>
</template>

<script>
  export default {
    name:'frame-screen',
    props:{
      type:{
        type:String,
        default:'detail'
      }
    }
  }
</script>

<style>
</style>
