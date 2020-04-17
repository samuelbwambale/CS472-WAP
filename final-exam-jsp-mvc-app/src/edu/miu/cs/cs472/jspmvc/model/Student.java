package edu.miu.cs.cs472.jspmvc.model;

public class Student {
    private String studentId;
    private String studentName;
    private String levelOfStudy;
    private String nextCourse;

    public Student() {

    }

    public Student(String studentId, String studentName, String levelOfStudy, String nextCourse) {
        super();
        this.studentId = studentId;
        this.studentName = studentName;
        this.levelOfStudy = levelOfStudy;
        this.nextCourse = nextCourse;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getLevelOfStudy() {
        return levelOfStudy;
    }

    public void setLevelOfStudy(String levelOfStudy) {
        this.levelOfStudy = levelOfStudy;
    }

    public String getNextCourse() {
        return nextCourse;
    }

    public void setNextCourse(String nextCourse) {
        this.nextCourse = nextCourse;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId='" + studentId + '\'' +
                ", studentName='" + studentName + '\'' +
                ", levelOfStudy='" + levelOfStudy + '\'' +
                ", nextCourse='" + nextCourse + '\'' +
                '}';
    }
}


