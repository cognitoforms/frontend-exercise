<template>
	<div id="quiz-summary">
		<h1>Quiz Summary</h1>
		<div v-for="(question,qIndex) in questions" :key="qIndex">
			<div>Q{{qIndex+1}}: {{question.text}}</div>
			<ul>
				<li
					v-for="(answer, aIndex) in question.answers" 
					:key="aIndex"
					:class="{chosen: answers[qIndex] === aIndex}"
				>{{ answer }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ["questions","answers"]
}
</script>

<style scoped>

#quiz-summary {
	border: 2px solid black;
	padding: 16px;
	border-radius: 16px;
}

h1 {
	margin-top: 0px;
}

.chosen {
	background-color: #09a098;
}

</style>