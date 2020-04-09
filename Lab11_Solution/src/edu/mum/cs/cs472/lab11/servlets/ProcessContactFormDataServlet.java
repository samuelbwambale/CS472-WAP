package edu.mum.cs.cs472.lab11.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ProcessContactFormDataServlet
 */
@WebServlet(name="ProcessContactFormDataServlet", urlPatterns = {"/process-contact-form"})
public class ProcessContactFormDataServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProcessContactFormDataServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    @Override
    public void init() throws ServletException {
        super.init();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect("contact-form");
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String missingFieldsMsg = "";
        String customerName = request.getParameter("customerName");
        String gender = request.getParameter("radioGender");
        String category = request.getParameter("ddlCategory");
        String message = request.getParameter("message");
        System.out.println("name= "+ customerName + ", gender= " + gender + ", cat= " + category + ", msg= " + message);
        // Check for missing fields data
        if(customerName.equals("")) {
            missingFieldsMsg += "<span style='color:red;font-size:1em'>Name is missing.</span><br/>";
        }
        if(gender == null) {
            missingFieldsMsg += "<span style='color:red;'>Gender is missing.</span><br/>";
        }
        if(category.equals("null")) {
            missingFieldsMsg += "<span style='color:red;'>Category is missing.</span><br/>";
        }
        if(message.equals("")) {
            missingFieldsMsg += "<span style='color:red;'>Message is missing.</span><br/>";
        }
        if(!missingFieldsMsg.equals("")) {
            request.setAttribute("errMsgs", missingFieldsMsg);
            // forward back to sender
            RequestDispatcher rd = request.getRequestDispatcher("/contact-form");
            rd.forward(request, response);
        } else {
            String redirectUrl = "thankyou?customerName="+customerName+"&radioGender="+gender+"&ddlCategory="+category+"&message="+message;
            response.sendRedirect(redirectUrl);
        }
    }

}

