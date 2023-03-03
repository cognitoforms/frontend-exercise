<template>
  <!-- <pre>{{ JSON.stringify(questions, null, 2) }}</pre> -->
  <div id="quiz-container">
    <button v-if="quizStatus === 'not-started'" @click="startQuiz">Start Quiz</button>
    <div v-if="quizStatus === 'in-progress'" id="question-container">
      <div class="question-header">Q {{ currentQuestion }} of {{ questions.length }}</div>
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
  }

  #quiz-container > button {
    font-size: 64px;
    padding: 32px;
    border-radius: 64px;
    border: 0px;
    box-shadow: 4px 4px 32px 0px rgb(114, 114, 114) ;
    background-color:lightskyblue;
    cursor: pointer
  }

  #quiz-container > button:hover {
    background-color:rgb(173, 224, 255)
  }

  #question-container {
    border: 2px solid;
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  #question-container .question-header {
    justify-self: flex-start;
    font-size: 32px;
    border-bottom: 4px double;
  }

  #question-container hr {
    flex: 1;
  }

  #question-container .question-footer button {
    background-color: deepskyblue;
    font-style: bold;
  }
</style>
