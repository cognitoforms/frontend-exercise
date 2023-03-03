<template>
	<div id="quiz-summary">
		<h1>Quiz Summary</h1>
		<div class="summary-section" v-for="(question,qIndex) in questions" :key="qIndex">
			<div>Q{{qIndex+1}}: {{question.text}}</div>
			<ul>
				<template v-for="(answer, aIndex) in question.answers">
					<li
						:key="aIndex"
						v-if="showOthers || answers[qIndex] === aIndex"
						:class="{chosen: answers[qIndex] === aIndex}"
					>{{ answer }}</li>
				</template>
			</ul>
		</div>
		<div class="show-others-container">
			<label for="show-others">Show Other Answers? </label>
			<input id="show-others" type="checkbox" v-model="showOthers">
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showOthers: true
		}
	},
	props: ["questions","answers"]
}
</script>

<style scoped>

#quiz-summary {
    display: flex;
    flex-direction: column;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: white
}

h1 {
	margin-top: 0px;
	padding: 16px;
	font-size: 32px;
	color: white;
	font-weight: bold;
	border-radius: 32px 32px 0px 0px;
	background: #09a098;
}

.summary-section {
	padding: 16px;
	padding-bottom: 8px;
	font-size: 24px;
}

li {
	padding: 2px 2px 2px 10px;
}

.chosen {
	background: #ffdacd;;
}

.show-others-container {
	text-align: center;
	font-size: 24px;
	padding: 16px;
}

</style>