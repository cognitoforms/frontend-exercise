<template>
  <div>
    <b-form @submit="submitAnswer">
      <b-form-group>
        <label class="question">
          {{ userAnswers.length + 1 }})&nbsp;{{ currentQuestion.text }}
        </label>
        <b-form-radio-group
          v-model="selection"
          :options="currentQuestion.answers"
          name="radios-stacked"
          stacked
          size="lg"
          required
        ></b-form-radio-group>
      </b-form-group>
      <b-button
        v-if="userAnswers.length !== totalQuestions - 1"
        type="submit"
        class="quiz-button"
        squared
        variant="primary"
      >
        Next Question >
      </b-button>
      <b-button v-else type="submit" squared variant="success">
        Submit All Answers
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: {
      type: Object,
    },
    userAnswers: {
      type: Array,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selection: "",
    };
  },
  methods: {
    submitAnswer(event) {
      event.preventDefault();

      this.$emit("add-answer", this.selection);
      // Clear selection incase next answers array
      // contains an identical selection
      this.selection = "";
    },
  },
};
</script>
