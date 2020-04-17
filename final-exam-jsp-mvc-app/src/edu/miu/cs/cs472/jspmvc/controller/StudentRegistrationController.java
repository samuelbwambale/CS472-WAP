package edu.miu.cs.cs472.jspmvc.controller;

import edu.miu.cs.cs472.jspmvc.model.Student;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "StudentRegistrationController", urlPatterns = {"/register-student"})
public class StudentRegistrationController extends HttpServlet {
    private ArrayList<Student> studentsList;
    public StudentRegistrationController() {
        super();


    }

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        studentsList = new ArrayList<Student>();
        ServletContext context = config.getServletContext();
        context.setAttribute("studentsList", studentsList);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String studentId = request.getParameter("studentId");
        String studentName = request.getParameter("studentName");
        String levelOfStudy = request.getParameter("levelOfStudy");
        String nextCourse = request.getParameter("nextCourse");


        Student student = new Student(studentId, studentName, levelOfStudy, nextCourse);
        request.setAttribute("student", student);

        List<String> errors = new ArrayList<>();
        if (studentId != null && studentId.equals("")) {
            errors.add("Please enter your Student ID");
        }
        if (studentName != null && studentName.equals("")) {
            errors.add("Please enter your full name");
        }
        if (levelOfStudy != null && levelOfStudy.equals("")) {
            errors.add("Please select your level of Study");
        }
        if (nextCourse != null && nextCourse.equals("")) {
            errors.add("Please select your next course from provided options");
        }
        if (errors.size() > 0) {
            System.out.println("errors ......" + errors);
            request.setAttribute("errors", errors);
            request.getRequestDispatcher("/WEB-INF/views/student-registration-form.jsp").forward(request, response);

        } else {
            studentsList.add(student);
            System.out.println(studentId + " " + studentName + " " + levelOfStudy + " " + nextCourse);
            request.getRequestDispatcher("/all-students").forward(request, response);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/WEB-INF/views/student-registration-form.jsp").forward(request, response);
    }
}
