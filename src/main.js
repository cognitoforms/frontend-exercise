import Vue from "vue";
import Quiz from "./views/Quiz.vue";
import questions from "./questions";
import { BootstrapVue } from "bootstrap-vue";

// order is important!!
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Quiz, { props: { questions } })
}).$mount("#app");
