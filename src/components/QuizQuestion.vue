<template>
	<div class="question-body">
		<div class="question-text">{{ question.text }}</div>
		<div v-for="(answer, index) in question.answers" :key="answer">
			<input 
				type="radio" 
				:name="inputName()"
				v-model="selected"
				:id="inputId(index+1)"
				:value="index"
			>
			<label :for="inputId(index)">{{ answer }}</label>
		</div>
		<button 
			:disabled="selected === null"
			@click="$emit('advance-question', selected)"
		>next</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selected: null,
		}
	},
	props: ["question", "questionNum"],
	methods: {
		inputName() {
			return `q${this.questionNum}`
		},
		inputId(index) {
			return `q${this.questionNum}a${index+1}`
		}
	}
}
</script>

<style scoped>



</style>