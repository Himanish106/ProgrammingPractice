package Week1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class QuizInfo {

    private int userScore;
    private int questionIndex;
    private List<Question> questions;

    public QuizInfo(List<Question> questions) {
        this.userScore = 0;
        this.questionIndex = 0;
        this.questions = new ArrayList<>(questions);
        Collections.shuffle(this.questions);
    }

    public void quizSection() {
        for (questionIndex = 0; questionIndex < questions.size(); questionIndex++) {
            Question currentQuestion = getCurrentQuestion();
            displayQuestion(currentQuestion);
            int userResponse = getUserResponse();
            checkAnswer(currentQuestion, userResponse);
        }
        displayResult();
    }

    private Question getCurrentQuestion() {
        return questions.get(questionIndex);
    }

    private void displayQuestion(Question question) {
        System.out.println(question.getQuestionText());
        List<String> options = question.getOptions();
        for (int i = 0; i < options.size(); i++) {
            System.out.println((i + 1) + "." + options.get(i));

        }
    }

    private int getUserResponse() {
        Scanner sc = new Scanner(System.in);
        int userResponse;
        while (true) {
            System.out.println("Enter your choice (1-" + getCurrentQuestion().getOptions().size() + "):");
            if (sc.hasNextInt()) {
                userResponse = sc.nextInt();
                if (userResponse >= 1 && userResponse <= getCurrentQuestion().getOptions().size()) {
                    break;
                } else {
                    System.out.println("Invalid Input! Please enter a valid number");
                }
            }
        }
        sc.nextLine();
        sc.close();
        return userResponse;
    }

    private void checkAnswer(Question question, int userResponse) {
        if (userResponse == question.getCorrectAnswer()) {
            System.out.println("Correct!");
            userScore++;
        } else {
            System.out.println("Wrong! The correct answer is: " + question.getCorrectAnswer() + "\n");
        }
    }

    private void displayResult() {
        System.out.println("Thanks for Participating! Your Score is : " + userScore + " out of " + questions.size());
    }
}
