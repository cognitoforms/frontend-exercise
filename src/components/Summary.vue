<template>
  <b-container fluid>
    <p class="summary-title">Quiz Summary</p>
    <p class="summary-subtitle">
      See your
      <strong class="px-2 bg-primary text-white border border-primary"
        >Selections Highlighted</strong
      >
      Below
    </p>
    <b-card-group deck class="col justify-content-center">
      <b-card
        v-for="(question, qIndex) in questions"
        :key="qIndex"
        class="bg-light border border-primary mb-4 font-weight-bold"
        style="min-width: 18rem; max-width: 18rem"
      >
        <template #header>
          <h6 class="mb-0 question">
            {{ qIndex + 1 }})&nbsp;{{ question.text }}
          </h6>
        </template>
        <b-card-text
          v-for="(answer, aIndex) in question.answers"
          :key="aIndex"
          class="pt-3"
        >
          <span
            v-if="userAnswers[qIndex].includes(answer)"
            class="answer px-2 mb-2 bg-primary text-white border border-primary"
          >
            {{ answer }}
          </span>
          <span v-else class="px-2 mb-2 answer">
            {{ answer }}
          </span>
        </b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  props: {
    userAnswers: {
      type: Array,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
  },
};
</script>
