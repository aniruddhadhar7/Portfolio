package com.examdeskpro.service;

import com.examdeskpro.database.DBConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class ResultService {

    public static void saveResult(
            int userId,
            int examId,
            int score) {

        try {

            Connection con =
                    DBConnection.getConnection();

            String query =
                "INSERT INTO results(user_id, exam_id, score) VALUES (?, ?, ?)";

            PreparedStatement ps =
                    con.prepareStatement(query);

            ps.setInt(1, userId);
            ps.setInt(2, examId);
            ps.setInt(3, score);

            ps.executeUpdate();

            System.out.println("Result Saved");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}