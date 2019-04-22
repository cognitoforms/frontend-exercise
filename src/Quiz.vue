<template>
  <pre>{{ JSON.stringify(questions, null, 2) }}</pre>
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
    return {};
  }
};
</script>
