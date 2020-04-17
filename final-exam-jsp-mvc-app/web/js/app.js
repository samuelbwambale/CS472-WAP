"use strict";
$(function () { // IIFE function - InstantlyInvocked

    clearForm();
});

function clearForm() {
    $("#student-registration-form").submit(event => {
        event.preventDefault();
        let studentId = $("#studentId");
        let studentName = $("#studentName");
        let levelOfStudy = $("#levelOfStudy");
        let nextCourse = $("#nextCourse");

        studentId.val('');
        studentName.val('');
        levelOfStudy.val('');
        nextCourse.val('');
    });
};
