package Quiz;

import java.util.List;

public class Question {

    private String questionText;
    private int correctAnswer;
    private List<String> options;

    public void setQuestion(String questionText) {
        this.questionText = questionText;
    }

    public void setCorrectAnswer(int correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public String getQuestionText() {
        return questionText;
    }

    public int getCorrectAnswer() {
        return correctAnswer;
    }

    public List<String> getOptions() {
        return options;
    }
}
