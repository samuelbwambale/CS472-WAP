<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CS472-WAP JSP-MVC</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<%-- the header fragment--%>
<%@include file="../fragments/header.jsp" %>
<div class="container">
    <div class="jumbotron">
        <h1 class="display-3">Hello, world of HttpServlet 4.0!</h1>
        <h3>Welcome to Lab 10</h3>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="./index" role="button">Learn more</a>
<%--            <a class="btn btn-primary btn-lg" href="contact-form.jsp" role="button">Learn more</a>  // does not folowMVC pattern--%>
        </p>
    </div>
</div>
<%-- the footer fragment--%>
<%@include file="../fragments/footer.jsp" %>
</body>
</html>
