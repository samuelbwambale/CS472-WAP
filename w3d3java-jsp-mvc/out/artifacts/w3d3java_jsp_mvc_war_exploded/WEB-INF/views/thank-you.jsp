<%@ page import="java.util.Date" %>
<%@ page import="java.time.LocalDate" %>
<%@ page import="java.time.format.DateTimeFormatter" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CS472-WAP JSP-MVC Thank You</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<%-- the header fragment--%>
<%@include file="../fragments/header.jsp" %>
<div>
<div class="container">

    <%-- To show the date --%>
    <div class="container"><br/>
        <%
            String localDate = LocalDate.now().format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"));
            request.setAttribute("localDate", localDate);%>
        <span style="float:right;" class="text-muted"><c:out value="${localDate}"></c:out></span>
    </div>

    <p>
        <br/>
        <div class="card">
            <div class="card-header">
                <h2>Thank you! Your message has been received as follows:</h2>
            </div>
            <div class="card-body">
                <h5 class="card-title">Name: <c:out value="${contactMessage.customerName}"></c:out></h5><br/>
                <p class="card-subtitle mb-2 text-muted">Gender: <c:out value="${contactMessage.gender}"></c:out></p><br/>
                <p class="card-subtitle mb-2 text-muted">Category: <c:out value="${contactMessage.category}"></c:out></p><br/>
                <p class="card-subtitle mb-2">Message: <c:out value="${contactMessage.message}"></c:out></p><br/><br/>
                <p>Please feel free to <a href="./contact-message" class="card-link">Contact Us</a> again</p>
        </div>
        </div>
    </p>
</div>
<%-- the footer fragment--%>
<%@include file="../fragments/footer.jsp" %>
</body>
</html>
