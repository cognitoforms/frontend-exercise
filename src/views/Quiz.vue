<template>
  <b-container fluid style="max-width: 1200px">
    <h1 class="quiz-title">Cognito Quiz</h1>
    <b-progress
      :value="userAnswers.length + 1"
      :max="questions.length"
      variant="success"
      :striped="true"
      :animated="!quizFinished"
      class="mb-4"
    >
    </b-progress>
    <div v-if="!quizFinished">
      <Question
        :currentQuestion="questions[userAnswers.length]"
        :totalQuestions="questions.length"
        :userAnswers="userAnswers"
        @add-answer="addAnswer($event)"
      />
    </div>
    <div v-else>
      <Summary :questions="questions" :userAnswers="userAnswers" />
    </div>
  </b-container>
</template>

<script>
import Question from "@/components/Question.vue";
import Summary from "@/components/Summary.vue";
export default {
  components: {
    Question,
    Summary,
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // Can just use the size of the array to determine
      // which questions the user has submitted thus far
      // i.e. if array size == 0 then only show question1
      userAnswers: [],
      quizFinished: false,
    };
  },
  methods: {
    // Adds an answer taken from the user to the userAnswers array
    addAnswer(theAnswer) {
      this.userAnswers.push(theAnswer);
      this.quizFinished = this.userAnswers.length === this.questions.length;
    },
  },
};
</script>

<style lang="stylus">
.quiz-title {
  font-size: clamp(32px, 3vw, 38px);
  font-weight: 700;
}

.question {
  font-size: clamp(18px, 3vw, 22px);
  font-weight: 500;
}

.answer {
  font-size: clamp(16px, 3vw, 18px);
  font-weight: 500;
}

.quiz-button {
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 300;
}

.summary-title {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 650;
}

.summary-subtitle {
  font-size: clamp(18px, 3vw, 28px);
  font-weight: 500;
}
</style>