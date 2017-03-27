<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view></router-view>
		<br>
        <p>You can see this paragraph and the buttons below in all components</p>
        <p>They are also styled using Semantic UI</p>
        <button class="ui button">Shared Button, Normal</button>
        <button class="ui positive button">Shared Button, Positive</button>
        <button class="ui negative button">Shared Button, Negative</button>
    </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
