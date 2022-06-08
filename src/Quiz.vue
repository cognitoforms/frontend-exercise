<template>
<div>
  <div v-for="(question, index) in questions" :key="question" >
    <div v-show="index === quiz.index">
    <fieldset :hidden="quiz.isHidden">
      <legend>{{question.text}}</legend>
      <div v-for="answer in question.answers" :key="answer">  
        <label>
          <input type="radio"
            :value = "answer"
            :name = "index"
            v-model = "quiz.userAnswers[index]"
            @change="validateInput()">
              {{answer}} 
        </label>  
      </div>
      <button :disabled="button.isDisabled" @click="next">
        {{button.text}}
      </button> 
    </fieldset>
    </div>
  </div>
  <fieldset :hidden="quiz.resultsHidden">
    <legend>Results</legend>
    <ol>
    <div v-for="(question, index) in questions" :key="question" >
      <li>{{question.text}}</li>    
      <ul>
        <div v-for="answer in question.answers" :key="answer">
          <li>{{answer === quiz.userAnswers[index] ? answer+' (your answer)' : answer}}</li>
        </div>
      </ul>
    </div>
    </ol>
  </fieldset>
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
    return{
      quiz:{
        index: 0,
        userAnswers: Array(this.questions.length),
        isHidden: false,
        resultsHidden: true
      },
      button:{
        isDisabled: true,
        text: "Please select one of the answers above."
      }, 
    };
  },
  methods:{
    next: function(){
      this.quiz.index++
      this.button.text = "Please select one of the answers above."
      this.button.isDisabled = true
      if(this.questions.length <= this.quiz.index){  
        this.quiz.resultsHidden = false
      }
    },
    validateInput: function(){
      this.button.isDisabled = false
      if(this.questions.length -1 > this.quiz.index){
        this.button.text = "Next Question"
      }
      else{
        this.button.text = "Results"   
      }
    }
  }
};
</script>