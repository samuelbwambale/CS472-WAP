<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>CS472-WAP Student Registration Form</title>
    <!--    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <script defer src="./js/app.js"></script>
</head>
<body>
<%-- the header fragment--%>
<%@include file="../fragments/header.jsp" %>

<div class="container">
    <h3>Student Registration Form</h3>
    <form id="student-registration-form" method="post" action="${pageContext.request.contextPath}/register-student">

        <c:forEach var="errorData" items="${errors}" varStatus="iteration">
            <p style="color: red"><c:out value="${errorData}"></c:out></p>
        </c:forEach>

        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="studentId">*Student ID:</label>
                    <input type="text" class="form-control" id="studentId" name="studentId" pattern="000-[0-9]{2}-[0-9]{4}"
                           aria-describedby="studentIdHelp" placeholder="000-XX-XXXX">
                    <small id="studentIdHelp" class="form-text text-muted">Your unique student Identification number.</small>
                </div>
            </div>
        </div>

        <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="studentName">*Full Names:</label>
                <input type="text" class="form-control" id="studentName" name="studentName"
                       placeholder="e.g Anna J. Smith">
            </div>
        </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <label>*Level of Study:</label><br/>
                <label class="custom-control custom-radio">
                    <input id="undergraduate" name="levelOfStudy" type="radio" class="custom-control-input" value='Undergraduate' >
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Undergraduate</span>
                </label>
                <label class="custom-control custom-radio">
                    <input id="postgraduate" name="levelOfStudy" type="radio" class="custom-control-input" value='Postgraduate'>
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Postgraduate</span>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="nextCourse">*Next Course to take</label>
                    <select class="form-control" id="nextCourse" name="nextCourse" required>
                        <option value="" selected>Select...</option>
                        <option value="CS401-MPP">CS401-MPP</option>
                        <option value="CS544-EA">CS544-EA</option>
                        <option value="CS582-ASD">CS582-ASD</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="">
                    <button type="submit" id="submitForm" name="button" class='btn btn-primary btn-lg'>
                        Register Student</button>
                </div>
            </div>
        </div>

    </form>
</div>
<%-- the footer fragment--%>
<%@include file="../fragments/footer.jsp" %>
</body>
</html>

