<template>
	<div id="question-box">
		<div class='question-section'>
			<div class="question-text">{{ question.text }}</div>
			<div v-for="(answer, index) in question.answers" :key="answer">
				<input 
					type="radio" 
					:name="inputName()"
					v-model="selected"
					:id="inputId(index+1)"
					:value="index"
				>
				<label :for="inputId(index+1)">{{ answer }}</label>
			</div>
		</div>
		<div class='button-section'>
			<button 
				:disabled="selected === null"
				@click="$emit('advance-question', selected)"
			>Next</button>
		</div>
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

#question-box {
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
}

.button-section {
	text-align: right;
}

button {
	font-size: 30px;
	padding: 8px 32px;
	color: white;
	border: 0px;
	background-color: #09a098;
	border-radius: 32px;
	transition: 0.3s all;
	cursor: pointer
}

button:hover:not(:disabled) {
	filter: brightness(1.2)
}

button:disabled {
	background: white;
	outline: 2px solid #09a098;
	color: rgb(165, 165, 165);
	cursor: default
}

.

* {
	font-size: 24px;
}

</style>