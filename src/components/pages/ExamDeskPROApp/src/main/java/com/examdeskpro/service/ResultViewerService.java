package com.examdeskpro.service;

import com.examdeskpro.database.DBConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ResultViewerService {

    public static String getResults() {

        StringBuilder output = new StringBuilder();

        try {

            Connection con =
                    DBConnection.getConnection();

            String query =
                    "SELECT * FROM results";

            PreparedStatement ps =
                    con.prepareStatement(query);

            ResultSet rs =
                    ps.executeQuery();

            while(rs.next()) {

                output.append(
                    "Result ID: "
                    + rs.getInt("result_id")
                    + " | Score: "
                    + rs.getInt("score")
                    + "\n"
                );
            }

        } catch(Exception e) {
            e.printStackTrace();
        }

        return output.toString();
    }
}