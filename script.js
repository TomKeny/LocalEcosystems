let array = ["test","test1","test2","test3","test4","test5","test6","test7","test8","test9"]

function CheckAnswers(){
    Quiz = document.forms.quiz.elements;
    let score = Number(Quiz.Litter.value) + Number(Quiz.Shower.value) + Number(Quiz.Produce.value) + Number(Quiz.Meat.value) + Number(Quiz.Travel.value) + Number(Quiz.Recycle.value);
    alert("Your score is: " + score + "/18");
}

function RandomFact() {
    alert(array[Math.floor(Math.random() * 10)]);
}