import Vue from "vue";
import Quiz from "./Quiz.vue";
import questions from "./questions";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
