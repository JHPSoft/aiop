<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%@page import="org.jsoup.*"%>
    <%@page import="org.jsoup.nodes.Document"%>
    <%@page import="org.jsoup.select.Elements"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">

<link rel="stylesheet" type="text/css" href="http://192.168.0.4/html/navertop10/mystyle.css">
<%
String[][] myData = new String[10][2];
%>
<title>Insert title here</title>
<script src="http://192.168.0.4/html/navertop10/myfunction.js"></script>



</head>
<body>
<img src="http://192.168.0.4/html/navertop10/title.PNG" width="100%">
<table class="mytable">
<%


Document document = Jsoup.connect("http://www.naver.com").get();

if (null != document) 
{
    Elements elements = document.select("ol#realrank > li:not(#lastrank) > a");
    
    
    for (int i = 0; i < elements.size(); i++) 
    {
    	myData[i][0] = elements.get(i).attr("title");
    	myData[i][1] = elements.get(i).attr("href");
    	
    	out.println("<tr>");
		out.println("<td align=\"center\"] width=\"20%\">" + (i+1) + "위</td>"  );
		out.println("<td onClick=\"window.open('" + myData[i][1] + "','','');\">" +  myData[i][0] );
		out.println("</tr>");
    }
}
	%>
	</table>
</body>
</html>