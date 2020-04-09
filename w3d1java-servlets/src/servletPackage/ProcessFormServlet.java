package servletPackage;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "ProcessFormServlet", urlPatterns = {"/validate"})
public class ProcessFormServlet extends HttpServlet {

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
            request.setAttribute("errors", errors);
            request.getRequestDispatcher("/contact-us").forward(request, response);
        } else {
            response.sendRedirect(request.getContextPath() + "/display?customerName=" + customerName + "&gender=" + gender + "&category=" + category + "&message=" + message);
        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
