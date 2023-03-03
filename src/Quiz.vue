<template>
  <!-- <pre>{{ JSON.stringify(questions, null, 2) }}</pre> -->
  <div id="quiz-container">
    <button v-if="quizStatus === 'not-started'" @click="startQuiz">Start Quiz</button>
    <div v-if="quizStatus === 'in-progress'" id="question-container">
      {{ currentQuestion }} of {{ questions.length }}
      <button @click="advanceQuestion">next</button>
      </div>
    <div v-if="quizStatus === 'completed'">Completed</div>
  </div>
</template>

<script>
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
    startQuiz () {
      this.quizStatus = 'in-progress'
      this.currentQuestion = 1;
    },
    advanceQuestion () {
      if (this.currentQuestion >= this.questions.length) {
        this.quizStatus = 'completed'
      } else {
        this.currentQuestion++
      }
    }
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
</style>
