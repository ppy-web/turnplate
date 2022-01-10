<template>
  <div id="app">
<input id=default name=changer type=radio class=theme-box checked> <input id=dark name=changer type=radio
  class=theme-box> <label class=theme for=dark id=dark-btn><span></span> <span class=dark-mode-hide
    aria-label="dark color scheme">关灯</span>
  <span class=light-mode-hide aria-label="light color scheme">light</span></label> <input id=vegas name=changer
  type=radio class=theme-box> <label class=theme for=vegas id=vegas-btn><span></span> <span
    aria-label="vegas color scheme">vegas</span></label>
<input id=party name=changer type=radio class=theme-box> <label class=theme for=party id=party-btn><span></span> <span
    aria-label="party color scheme">party</span></label> <input id=dd name=changer type=radio class=theme-box> <label
  class=theme for=dd id=dd-btn><span></span> <span aria-label="d&d color scheme">d&d</span></label> <label class=theme
  for=default id=default-btn><span></span> <span class=light-mode-hide aria-label="dark color scheme">关灯</span> <span
    class=dark-mode-hide aria-label="light color scheme">light</span></label>
<div class=color-wrap>
  <header></header>
  <main>
    <form id=form class=tool action=/.netlify/functions/spin-the-wheel>
      <div class="wrapper control-box bg-base pattern pin-stripes set-shade h-borders">
        <div class=dropdown><input id=show-more type=checkbox checked>
          <label for=show-more>
            <strong class=closed-label>显示选项</strong>
            <strong class=open-label>隐藏选项</strong>
            <span class=icon aria-hidden=true></span>
          </label>
          <div class=hidden-items>
            <label class=label-input>可以新加一行也可删减一行
              <span class=hint>转盘的块数随着你的行数变化而变化</span>
<textarea id=list name=list placeholder="">
炒面
新疆炒米粉
小火锅
爆肚面
米线
凉皮
米饭套餐
牛肉汤
烩面
麻辣香锅
麻辣烫
千里香馄饨
减脂餐
炸鸡汉堡
问李德永
</textarea>
            </label>
            <label class="checkbox noscript-hide"  style="display: none;">
              <span>播放声音</span>
              <input id=sound type=checkbox value=sound name=sound><b class=check aria-hidden=true>✔</b>
            </label>
          </div>
        </div>
      </div><noscript>
        <p><strong>Javascript disabled?</strong> You can still use this tool. Write a list and click "spin the wheel".
        </p><br>
      </noscript>
      <div id=results class="wrapper center noscript-hide">
        <div id=spinner></div>
      </div>
      <div id=tada class="tada noscript-hide" aria-live=polite><span id=tada-text></span></div>
      <div class="wrapper pattern pin-stripes bg-base set-shade h-borders"><button
          class="btn action-button highlight"><span>开始转动</span></button>
        <button id=remove-button class=block type=button disabled>我不喜欢<strong id=remove-name>winner</strong>，从转盘中移除 
          </button> <button id=reset-wheel class=block type=button disabled>重置转盘</button>
      </div>
    </form>
    <section style="display: none;"><label class="block copy-box"><input
          readonly id=copy value=/spin-the-wheel /></label> </section>
  </main>
</div>
  </div>
</template>

<script>
// import {spinner} from "./script"
export default {
  name: 'App',
  mounted() {
      // spinner()
  },
  methods:{
   
  }
}
</script>

<style lang="less">
@import url("./assets/css/index.less");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
