import { mount } from "@vue/test-utils";
import Quiz from "@/views/Quiz.vue";
// import Question from "@/components/Question.vue";
import questionTestOne from "./questionTestOne";
// import QuestionsTestTwo from "./specs/questionTestTwo";
// import Summary from "@/components/Summary.vue";

test("test-launch", () => {
  console.log(Quiz);
});

test("answer questions", async () => {
  const quizWrapper = mount(Quiz, {
    propsData: {
      questions: questionTestOne
    }
  });
});
