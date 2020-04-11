package wap.customtag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CurrentDateTime extends SimpleTagSupport {

    private String color;
    private String size;

    public void doTag() throws JspException, IOException {
        String currDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"));
        StringBuilder sb = new StringBuilder();
        if(color == null && size == null) {
            sb.append("<span>");
        }else {
            sb.append("<span style=\"");
            if(color != null) {
                sb.append(String.format("color: %s;", color));
            }
            if(size != null) {
                sb.append(String.format("font-size: %s;", size));
            }
            sb.append("\">");
        }
        sb.append(currDate);
        sb.append("</span>");
        JspWriter jspWriter = getJspContext().getOut();
        jspWriter.append(sb.toString());
    }

    // Setters
    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
