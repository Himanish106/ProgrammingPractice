package Quiz;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Quiz {

    private List<Question> setQuestions() {
        List<Question> questions = new ArrayList<>();
//      Question 1
        Question q1 = new Question();
        q1.setQuestion("What is the capital of France?");
        q1.setOptions(Arrays.asList("Berlin", "Paris", "Madrid", "Rome"));
        q1.setCorrectAnswer(2);
        questions.add(q1);
//      Question 2
        Question q2 = new Question();
        q2.setQuestion("Which one of the following river flows between Vindhyan and Satpura ranges?");
        q2.setOptions(Arrays.asList("Narmada", "Mahanadi", "Son", "Netravati"));
        q2.setCorrectAnswer(1);
        questions.add(q2);
//      Question 3
        Question q3 = new Question();
        q3.setQuestion("The Central Rice Research Station is situated in?");
        q3.setOptions(Arrays.asList("Chennai", "Bangalore", "Quilon", "Cuttack"));
        q3.setCorrectAnswer(4);
        questions.add(q3);
//      Question 4
        Question q4 = new Question();
        q4.setQuestion(" Who among the following wrote Sanskrit grammar?");
        q4.setOptions(Arrays.asList("Kalidasa", "Charak", "Panini", "Aryabhatt"));
        q4.setCorrectAnswer(3);
        questions.add(q4);
//      Question 5
        Question q5 = new Question();
        q5.setQuestion("River Luni originates near Pushkar and drains into which one of the following?");
        q5.setOptions(Arrays.asList("Rann of Kachchh", "Arabian Sea", "Gulf of Cambay", "Lake Sambhar"));
        q5.setCorrectAnswer(1);
        questions.add(q5);
//      Question 6
        Question q6 = new Question();
        q6.setQuestion("Who among the following was the First Indian Cricketer to bag 500 wickets in Test matches?");
        q6.setOptions(Arrays.asList("Kapil Dev", "Srinath", "Anil Kumble", "Harbhajan Singh"));
        q6.setCorrectAnswer(3);
        questions.add(q6);
//      Question 7
        Question q7 = new Question();
        q7.setQuestion("What is the name of the programme launched to spread awareness about lives of national icons?");
        q7.setOptions(Arrays.asList("Parakram Netas program", "Know Your Leader program", "Mera Bharat Mahan program", "Atmanirbhar India"));
        q7.setCorrectAnswer(2);
        questions.add(q7);
//      Question 8
        Question q8 = new Question();
        q8.setQuestion("In parliamentary language, what is the name of official of the party who is authorized to issue directions?");
        q8.setOptions(Arrays.asList("Whip", "Mentor", "Lead", "Speaker"));
        q8.setCorrectAnswer(1);
        questions.add(q8);
//      Question 9
        Question q9 = new Question();
        q9.setQuestion("Birdie and Eagle are two terms related to which of the following sports?");
        q9.setOptions(Arrays.asList("Polo", "Golf", "Chess", "Billiards"));
        q9.setCorrectAnswer(2);
        questions.add(q9);
//      Question 10
        Question q10 = new Question();
        q10.setQuestion("Which among the following is called India’s market watch dog?");
        q10.setOptions(Arrays.asList("RBI", "SEBI", "NABARD", "SBI"));
        q10.setCorrectAnswer(2);
        questions.add(q10);
        return questions;
    }

    public void beginQuiz() {
        List<Question> questions=setQuestions();
        QuizInfo quiz = new QuizInfo(questions);
        quiz.quizSection();
    }
}
