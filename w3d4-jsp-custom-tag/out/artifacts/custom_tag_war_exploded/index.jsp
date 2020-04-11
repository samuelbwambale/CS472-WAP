<%--
  Created by IntelliJ IDEA.
  User: sbwambale
  Date: 4/9/20
  Time: 8:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.time.LocalDate" %>
<%@ page import="java.time.format.DateTimeFormatter" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix='ct' uri='/WEB-INF/custom.tld'%>
<html>
<head>
  <meta charset="UTF-8">
  <title>WAP :: Custom Tag</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<%-- the header fragment--%>
<%@include file="WEB-INF/fragments/header.jsp" %>


<div>
  <div class="container">

    <%--    To show the date --%>
    <div class="container"><br/>
      <span style="float:right;" class="text-muted">Using A Custom Tag To display Date & Time: <ct:currentDateTime color="green" size="1em"/></span>
    </div>

    <p>
      <br/>
      <div class="card">
        <div class="card-header">
          <h2>JSP Custom Tag</h2>
        </div>
        <div class="card-body">
          <p class="card-title"><span class="font-weight-bold">Name:</span> currentDateTime</p>
          <p class="card-title"><span class="font-weight-bold">URI:</span> /WEB-INF/custom.tld</p>
          <p class="card-subtitle mb-2"><span class="font-weight-bold">Description:</span>
            This custom tag accepts two attributes <span class="font-italic">(color and size)</span> and prints the current date and time using the given attributes. The attributes are optional. A custom tag is a user-defined JSP language element. When a JSP page containing a custom tag is translated into a servlet, the tag is converted to operations on an object called a tag handler.
            The Web container then invokes those operations when the JSP page's servlet is executed.<br><br>
            <span class="font-weight-bold">Example: </span> Am using the custom tag to print the <span class="font-italic">now()</span> date in different colors and sizes.
            <div class="container margin-top-2">
            <p><ct:currentDateTime color="red" size="14px"/></p>
            <p><ct:currentDateTime color="yellow" size="1em"/></p>
          </div>

    <p>For more details <a href="http://www.google.com" class="card-link">check here</a> to see the implementation</p>
  </div>
</div>
</p>
</div>

<%-- the footer fragment--%>
<%@include file="WEB-INF/fragments/footer.jsp" %>
</body>
</html>
