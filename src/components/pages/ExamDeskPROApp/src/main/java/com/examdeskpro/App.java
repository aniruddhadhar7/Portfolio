package com.examdeskpro;

import com.examdeskpro.service.*;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.geometry.Insets;
import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.util.Duration;
import java.util.*;

public class App extends Application {

    @Override
    public void start(Stage stage) {
        Label title = new Label("ExamDeskPRO Login");

        TextField emailField = new TextField();
        emailField.setPromptText("Enter Email");

        PasswordField passwordField = new PasswordField();
        passwordField.setPromptText("Enter Password");

        Button loginButton = new Button("Login");
        Label message = new Label();

        loginButton.setOnAction(e -> {
            String email = emailField.getText();
            String password = passwordField.getText();

            boolean success = LoginService.authenticate(email, password);

            if (success) {
            Stage dashboard = new Stage();

            Label welcome = new Label("Welcome to ExamDeskPRO Dashboard");

            Button startExam = new Button("Start Exam");
            

startExam.setOnAction(event -> {
    Stage examStage = new Stage();

    final int[] currentQuestion = {1};
    final int[] score = {0};
    HashSet<Integer> submittedQuestions = new HashSet<>();

    String[] q = QuestionService.getQuestionById(currentQuestion[0]);
    final String[] currentCorrectAnswer = {q[5]};

    Label question = new Label(q[0]);

    RadioButton option1 = new RadioButton(q[1]);
    RadioButton option2 = new RadioButton(q[2]);
    RadioButton option3 = new RadioButton(q[3]);
    RadioButton option4 = new RadioButton(q[4]);

    ToggleGroup group = new ToggleGroup();
    option1.setToggleGroup(group);
    option2.setToggleGroup(group);
    option3.setToggleGroup(group);
    option4.setToggleGroup(group);

    Button nextButton = new Button("Save & Next");
Button submit = new Button("Submit Answer");

nextButton.setStyle(
    "-fx-background-color: #3498db;" +
    "-fx-text-fill: white;" +
    "-fx-font-size: 14px;"
);

submit.setStyle(
    "-fx-background-color: #27ae60;" +
    "-fx-text-fill: white;" +
    "-fx-font-size: 14px;"
);

    Label resultLabel = new Label();
    
    // LEFT QUESTION NAVIGATOR
Button q1 = new Button("Q1");
Button q2 = new Button("Q2");
Button q3 = new Button("Q3");

q1.setStyle("-fx-background-color: #3498db; -fx-text-fill: white;");

q1.setPrefWidth(60);
q2.setPrefWidth(60);
q3.setPrefWidth(60);

q1.setStyle(
    "-fx-background-color: #95a5a6;" +
    "-fx-text-fill: white;" +
    "-fx-font-weight: bold;"
);

q2.setStyle(
    "-fx-background-color: #95a5a6;" +
    "-fx-text-fill: white;" +
    "-fx-font-weight: bold;"
);

q3.setStyle(
    "-fx-background-color: #95a5a6;" +
    "-fx-text-fill: white;" +
    "-fx-font-weight: bold;"
);


    nextButton.setOnAction(e3 -> {
        currentQuestion[0]++;

        String[] nextQ = QuestionService.getQuestionById(currentQuestion[0]);

        if (nextQ[0] != null) {
            question.setText(nextQ[0]);
            option1.setText(nextQ[1]);
            option2.setText(nextQ[2]);
            option3.setText(nextQ[3]);
            option4.setText(nextQ[4]);
            currentCorrectAnswer[0] = nextQ[5];

            group.selectToggle(null);
            if (currentQuestion[0] == 2) {
                q2.setStyle("-fx-background-color: #3498db; -fx-text-fill: white;");
            }

            if (currentQuestion[0] == 3) {
                q3.setStyle("-fx-background-color: #3498db; -fx-text-fill: white;");
            }
        } else {
    Stage resultStage = new Stage();

    ResultService.saveResult(
        1,
        1,
        score[0]
);
    Label finalScore = new Label("Exam Finished! Your Score: " + score[0] + "/3");

    VBox resultLayout = new VBox(20, finalScore);
    resultLayout.setAlignment(Pos.CENTER);

    Scene resultScene = new Scene(resultLayout, 400, 200);

    resultStage.setScene(resultScene);
    resultStage.setTitle("Final Result");
    resultStage.show();

    examStage.close();
}
    });

    submit.setOnAction(e2 -> {
    RadioButton selected = (RadioButton) group.getSelectedToggle();

    if (selected != null) {
        String selectedAnswer = selected.getText();

        String correctAnswer = currentCorrectAnswer[0];

        if (!submittedQuestions.contains(currentQuestion[0])) {

    if (selectedAnswer.equals(correctAnswer)) {
        score[0]++;
    }

    submittedQuestions.add(currentQuestion[0]);
}

        resultLabel.setText("Current Score: " + score[0]);
        if (currentQuestion[0] == 1) {
    q1.setStyle("-fx-background-color: #2ecc71; -fx-text-fill: white;");
}

if (currentQuestion[0] == 2) {
    q2.setStyle("-fx-background-color: #2ecc71; -fx-text-fill: white;");
}

if (currentQuestion[0] == 3) {
    q3.setStyle("-fx-background-color: #2ecc71; -fx-text-fill: white;");
}
    } else {
        resultLabel.setText("Please select an option");
    }
});
BorderPane examLayout = new BorderPane();


// TOP HEADER
Label studentInfo = new Label("Candidate: Admin");
final int[] timeSeconds = {1800};

Label timer = new Label();
timer.setStyle("-fx-text-fill: white;");

Timeline[] timeline = new Timeline[1];

timeline[0] = new Timeline(
    new KeyFrame(Duration.seconds(1), e1 -> {

        int minutes = timeSeconds[0] / 60;
        int seconds = timeSeconds[0] % 60;

        timer.setText(String.format("Time Left: %02d:%02d", minutes, seconds));

        timeSeconds[0]--;

        if (timeSeconds[0] < 0) {

            timeline[0].stop();

            Stage resultStage = new Stage();

            ResultService.saveResult(
        1,
        1,
        score[0]
);

            Label finalScore = new Label(
                "Time Over! Final Score: " + score[0] + "/3"
            );

            VBox resultLayout = new VBox(20, finalScore);
            resultLayout.setAlignment(Pos.CENTER);

            Scene resultScene = new Scene(resultLayout, 400, 200);

            resultStage.setScene(resultScene);
            resultStage.setTitle("Final Result");
            resultStage.show();

            examStage.close();
        }
    })
);

timeline[0].setCycleCount(Timeline.INDEFINITE);
timeline[0].play();

HBox topBar = new HBox(300, studentInfo, timer);
topBar.setPadding(new Insets(15));
topBar.setStyle("-fx-background-color: #2c3e50; -fx-font-size: 16px;");
studentInfo.setStyle("-fx-text-fill: white;");
timer.setStyle("-fx-text-fill: white;");

examLayout.setTop(topBar);



VBox leftPanel = new VBox(20, q1, q2, q3);
leftPanel.setPadding(new Insets(20));
leftPanel.setStyle("-fx-background-color: #ecf0f1;");
leftPanel.setPrefWidth(120);

examLayout.setLeft(leftPanel);


// CENTER QUESTION AREA
VBox centerPanel = new VBox(20,
        question,
        option1,
        option2,
        option3,
        option4,
        submit,
        nextButton,
        resultLabel);

centerPanel.setPadding(new Insets(30));
centerPanel.setAlignment(Pos.CENTER_LEFT);

question.setStyle("-fx-font-size: 18px; -fx-font-weight: bold;");

examLayout.setCenter(centerPanel);


// SCENE
Scene examScene = new Scene(examLayout, 1000, 600);

examStage.setScene(examScene);
examStage.setTitle("ExamDeskPRO - NPTEL Style");
examStage.show();
});

            Button viewResult = new Button("View Results");
            viewResult.setOnAction(e5 -> {

    Stage resultStage = new Stage();

    TextArea resultArea = new TextArea();

    resultArea.setEditable(false);

    resultArea.setText(
        ResultViewerService.getResults()
    );

    Scene scene =
        new Scene(resultArea, 500, 400);

    resultStage.setScene(scene);

    resultStage.setTitle("Results");

    resultStage.show();

});

            Button logout = new Button("Logout");

            logout.setOnAction(e4 -> {

            try {

                Stage loginStage = new Stage();

                new App().start(loginStage);

                dashboard.close();

            } catch (Exception ex) {
                ex.printStackTrace();
            }

        });

            VBox dashboardLayout = new VBox(20, welcome, startExam, viewResult, logout);
            dashboardLayout.setAlignment(Pos.CENTER);

            Scene dashboardScene = new Scene(dashboardLayout, 600, 400);

            dashboard.setTitle("Dashboard");
            dashboard.setScene(dashboardScene);
            dashboard.show();

            stage.close();

        } else {
            message.setText("Invalid Credentials");
        }
        });

        VBox root = new VBox(15, title, emailField, passwordField, loginButton, message);
        root.setAlignment(Pos.CENTER);

        Scene scene = new Scene(root, 500, 400);

        stage.setScene(scene);
        stage.setTitle("ExamDeskPRO");
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}