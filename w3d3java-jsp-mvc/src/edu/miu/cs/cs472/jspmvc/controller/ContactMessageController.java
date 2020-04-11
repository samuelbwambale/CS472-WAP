package edu.miu.cs.cs472.jspmvc.controller;

import edu.miu.cs.cs472.jspmvc.model.ContactMessage;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@WebServlet(name = "ContactMessageController", urlPatterns = {"/contact-message"})
public class ContactMessageController extends HttpServlet {

    int counter;

    @Override
    public void init() throws ServletException {
        super.init();
        this.counter = 0;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.counter++;

        String customerName = request.getParameter("customerName");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");

        System.out.println(customerName + " " + category + " " + gender + " " + message);
        ContactMessage contactMessage = new ContactMessage(customerName, gender, category, message);
        request.setAttribute("contactMessage", contactMessage);

        List<String> errors = new ArrayList<>();
        if (customerName != null && customerName.equals("")) {
            errors.add("Please add a name");
        }
        if (gender != null && gender.equals("")) {
            errors.add("Please select gender");
        }
        if (category != null && category.equals("")) {
            errors.add("Please select a category");
        }
        if (message != null && message.equals("")) {
            errors.add("Please add a message");
        }
        if (errors.size() > 0) {
            System.out.println("errors ......" + errors);
            request.setAttribute("errors", errors);
            request.getRequestDispatcher("/WEB-INF/views/contact-form.jsp").forward(request, response);

        } else {
            request.getRequestDispatcher("/thank-you").forward(request, response);
        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/WEB-INF/views/contact-form.jsp").forward(request, response);
    }
}

