<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>CS472-WAP JSP-MVC Contact Form</title>
    <!--    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<%-- the header fragment--%>
<%@include file="../fragments/header.jsp" %>

        <div class="container">
            <h3>Customer Contact Form</h3>
            <form id="contactForm" method="post" action="${pageContext.request.contextPath}/contact-message">

                    <c:forEach var="errorData" items="${errors}" varStatus="iteration">
                        <p style="color: red"><c:out value="${errorData}"></c:out></p>
                    </c:forEach>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="customerName">*Name</label>
                                <input type="text" class="form-control" id="customerName" name="customerName"
                                       value="${contactMessage.customerName}"
                                       aria-describedby="nameHelp" placeholder="John H. Smith" required>
                                <small id="nameHelp" class="form-text text-muted">Enter your full name.</small>
                            </div>
                        </div>
                    </div>

                <div class="row">
                    <div class="col-md-12">
                <label>*Gender:</label><br/>
                <label class="custom-control custom-radio">
                    <input id="male" name="gender" type="radio" class="custom-control-input" value='Male' checked>
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Male</span>
                </label>
                <label class="custom-control custom-radio">
                    <input id="female" name="gender" type="radio" class="custom-control-input" value='Female'>
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Female</span>
                </label>
                    </div>
                </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="category">*Category</label>
                                <select class="form-control" id="category" name="category">
                                    <option value="" selected>Select a category</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Inquiry">Inquiry</option>
                                    <option value="Complaint">Complaint</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="message">*Message</label>
                                <textarea class="form-control" id="message" rows="4" name="message"
                                          placeholder="Message goes here..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                       <div class="col-md-12">
                           <div class="">
                               <button type="submit" id="submitForm" name="button" class='btn btn-primary btn-lg btn-block'>
                                   Submit</button>
                           </div>
                       </div>
                    </div>

            </form>
    </div>
<%-- the footer fragment--%>
<%@include file="../fragments/footer.jsp" %>
</body>
</html>
