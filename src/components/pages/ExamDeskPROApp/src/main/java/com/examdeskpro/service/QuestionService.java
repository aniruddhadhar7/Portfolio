package com.examdeskpro.service;

import com.examdeskpro.database.DBConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class QuestionService {

    public static String[] getQuestionById(int id) {
        String[] data = new String[6];

        try {
            Connection con = DBConnection.getConnection();

            String query = "SELECT * FROM questions WHERE question_id=?";
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                data[0] = rs.getString("question_text");
                data[1] = rs.getString("option_a");
                data[2] = rs.getString("option_b");
                data[3] = rs.getString("option_c");
                data[4] = rs.getString("option_d");
                data[5] = rs.getString("correct_answer");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return data;
    }
}