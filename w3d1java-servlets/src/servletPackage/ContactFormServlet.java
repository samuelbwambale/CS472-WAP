package servletPackage;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "ContactFormServlet", urlPatterns = {"/contact-us"})
public class ContactFormServlet extends HttpServlet {

    int counter;

    @Override
    public void init() throws ServletException {
        super.init();
        this.counter = 0;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.counter++;
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        try(PrintWriter printWriter = response.getWriter()) {
        String customerName = request.getParameter("customerName");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");
        Integer overallCounter = (Integer) request.getAttribute("counter");
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    // http://localhost:8080/w3d1java_servlets_war_exploded/contact-us

        String contactForm = "<html lang=\"en\">\n" +
                "\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\"\n" +
                "        integrity=\"sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu\" crossorigin=\"anonymous\">\n" +
                "\n" +
                "    <title>Contact Form</title>\n" +
                "</head>\n" +
                "\n" +
                "<body>\n" +
                "    <nav class=\"navbar navbar-light\" style=\"background-color: #e3f2fd;\">\n" +
                "        <div class=\"container-fluid\">\n" +
                "            <!-- Brand and toggle get grouped for better mobile display -->\n" +
                "            <div class=\"navbar-header\">\n" +
                "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n" +
                "                    data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
                "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
                "                    <span class=\"icon-bar\"></span>\n" +
                "                    <span class=\"icon-bar\"></span>\n" +
                "                    <span class=\"icon-bar\"></span>\n" +
                "                </button>\n" +
                "                <a class=\"navbar-brand\" href=\"#\">CS472-WAP ::: Lab11</a>\n" +
                "            </div>\n" +
                "\n" +
                "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
                "            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
                "                <ul class=\"nav navbar-nav\">\n" +
                "                    <li><a href=\"./index.html\">Home</a></li>\n" +
                "                    <li><a href=\"#\">About</a></li>\n" +
                "                    <li><a href=\"./contact-us\">Contact Us</a></li>\n" +

//                "                    <li><a href=\"" + baseUrl + "/contact-us\">Contact Us</a></li>\n" +
                "                </ul>\n" +
                "                <ul class=\"nav navbar-nav navbar-right\">\n" +
                "                    <li><a href=\"#\">Hello!</a></li>\n" +
                "                    <button type=\"button\" class=\"btn btn-default navbar-btn\">Sign Out</button>\n" +
                "                </ul>\n" +
                "            </div><!-- /.navbar-collapse -->\n" +
                "        </div><!-- /.container-fluid -->\n" +
                "    </nav>\n" +
                "\n" +
                "\n" +
                "\n" +
                "    <div class=\"container\">\n" +
                "\n" +
                "        <h3>Customer Contact Form</h3>\n" +
                "  <form method=\"post\" action=\"" + baseUrl + "/validate\">";

        List<String> errors = (List) request.getAttribute("errors");
        if (errors != null && errors.size() > 0) {
            for (String error : errors) {
                contactForm += "<div style=\"color: red;\">";
                contactForm += error;
                contactForm += "</div>";
            }
        }

        contactForm += "<div class=\"row\">\n" +
                "                <div class=\"form-group\">\n" +
                "                    <label for=\"customerName\">*Name</label>\n" +
                "                    <input type=\"text\" class=\"form-control\" id=\"customerName\" name=\"customerName\"\n" +
                "                        aria-describedby=\"nameHelp\" placeholder=\"John H. Smith\"\n";
        contactForm += " value=\"" + (customerName != null ? customerName : "") + "\"/>\n";

        contactForm += "<small id=\"nameHelp\" class=\"form-text text-muted\">Enter your full name.</small>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"row\">\n" +
                "    <div class=\"form-group\">\n" +
                "      <label for=\"male\">*Gender</label>\n" +
                "      <div class=\"custom-control custom-radio custom-control-inline\">\n" +
                "        <input type=\"radio\" id=\"male\" name=\"gender\" value=\"Male\" checked class=\"custom-control-input\">\n" +
                "        <label class=\"custom-control-label\" for=\"male\">Male</label>\n" +
                "      </div>\n" +
                "      <div class=\"custom-control custom-radio custom-control-inline\">\n" +
                "        <input type=\"radio\" id=\"female\" name=\"gender\" value=\"Female\" class=\"custom-control-input\">\n" +
                "        <label class=\"custom-control-label\" for=\"female\">Female</label>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "            </div>\n" +
                "            <div class=\"row\">\n" +
                "               <div class=\"form-group\">\n" +
                "                   <label for=\"category\">*Category</label>\n" +
                "                   <select class=\"form-control\" id=\"category\" name=\"category\">\n" +
                "                       <option value=\"\" selected>Select a category</option>\n" +
                "                           <option value=\"Feedback\">Feedback</option>\n" +
                "                           <option value=\"Inquiry\">Inquiry</option>\n" +
                "                           <option value=\"Complaint\">Complaint</option>\n" +
                "                   </select>\n" +
                "               </div>\n" +
                "            </div>\n" +
                "            <div class=\"row\">\n" +
                "    <div class=\"form-group\">\n" +
                "      <label for=\"message\">*Message</label>\n" +
                "      <textarea class=\"form-control\" id=\"message\" rows=\"3\" name=\"message\" placeholder=\"Message goes here...\">";
        contactForm += message != null ? message : "" + "\n";
        contactForm += "</textarea>\n" +
                "    </div>\n" +
                "            </div>\n" +
                "            <div class=\"row\">\n" +
                "                \n" +
                "                <div class=\"\">\n" +
                "                    <button type=\"submit\" id=\"submitForm\" name=\"button\" class='btn btn-primary btn-lg btn-block'\n" +
                "                         >Submit</button>\n" +
                "                </div>\n" +
                "            \n" +
                "            </div>\n" +
                "        </form>\n" +
                "\n" +
                "  <div style=\"margin-top: 20px;\">\n" +
                "            <p class=\"text-muted float-left\">\n" +
                "                Hit Count for this page: " + (this.counter == 0 ? "--" : this.counter) + "\n" +
                "            </p>\n" +
                "            <p class=\"text-muted float-right\">\n" +
                "                Total Hit count for the entire WebApp: " + (overallCounter == null || overallCounter == 0 ? "--" : overallCounter) + "\n" +
                "            </p>\n" +
                "        </div>" +
                "    </div>\n" +
                " <footer style=\"float: right; position: fixed; bottom: 0; right: 0; margin-top: 20px; font-family: monospace;\">" +
                "        \n" +
                "        <div>Copyright &copy; 2020</div>\n" +
                "    </footer>\n" +
                "\n" +
                "    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\"\n" +
                "        integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\"\n" +
                "        crossorigin=\"anonymous\"></script>\n" +
                "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\"\n" +
                "        integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\"\n" +
                "        crossorigin=\"anonymous\"></script>\n" +
                "    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"\n" +
                "        integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\"\n" +
                "        crossorigin=\"anonymous\"></script>\n" +
                "</body>\n" +
                "\n" +
                "</html>";
        printWriter.print(contactForm);

    }

    }
}
