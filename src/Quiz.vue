<template>
  <!-- <pre>{{ JSON.stringify(questions, null, 2) }}</pre> -->
  <div id="quiz-container">
    <button v-if="quizStatus === 'not-started'" @click="startQuiz">Start Quiz</button>
    <div v-if="quizStatus === 'in-progress'" id="question-container">
      <div class="question-header">Question {{ currentQuestion }}/{{ questions.length }}</div>
      <div class="question-body">
        <template v-for="(question, index) in questions">
          <QuizQuestion
            v-if="index+1 === currentQuestion"
            :key="index"
            :question="question" 
            :questionNum="index+1"
            @advance-question="advanceQuestion"
          />
        </template>
      </div>
    </div>
    <QuizSummary 
      v-if="quizStatus === 'completed'"
      :questions="questions"
      :answers="answers"
    />
  </div>
</template>

<script>
import QuizQuestion from './components/QuizQuestion.vue';
import QuizSummary from './components/QuizSummary.vue';

export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      quizStatus: 'not-started',
      currentQuestion: null,
      answers: []
    };
  },
  methods: {
    startQuiz() {
      this.quizStatus = 'in-progress'
      this.currentQuestion = 1;
    },
    advanceQuestion(selected) {
      this.answers.push(selected)
      if (this.currentQuestion >= this.questions.length) {
        this.quizStatus = 'completed'
      } else {
        this.currentQuestion++
      }
    }
  },
  components: {
    QuizQuestion,
    QuizSummary
  }
};
</script>

<style scoped>
  #quiz-container {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    background: aliceblue;
  }

  #quiz-container > button {
    font-size: 64px;
    padding: 32px;
    border: 0px;
    box-shadow: 4px 4px 32px 0px rgb(114, 114, 114) ;
    background-color:#09a098;
    color: white;
    cursor: pointer;
    transition: 0.3s all;
  }

  #quiz-container > button:hover {
    transform: scale(1.05);
  }

  #question-container {
    display: flex;
    flex-direction: column;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 30%;
    height: 40%;
    background: white
  }

  .question-header {
    justify-self: flex-start;
    font-size: 32px;
    border: 0px solid black;
    border-bottom: 0px;
    border-radius: 32px 32px 0px 0px;
    padding: 16px;
    font-weight: bold;
    background-color: #d85427;
    color: white
  }

  .question-body {
    font-size: 24px;
    border: 0px solid black;
    border-top: 0px;
    border-radius: 0px 0px 32px 32px;
    padding: 16px;
    height: 100%;
    overflow: scroll;
  }

</style>
