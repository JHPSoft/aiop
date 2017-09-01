<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
        <%@page import="org.jsoup.*"%>
    <%@page import="org.jsoup.nodes.Document"%>
    <%@page import="org.jsoup.select.Elements"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="height:100%;">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>

<style>
.taeduri
{
	border : 1px solid;
}
</style>

<%

%>

</head>
<body>

<div class="taeduri" style="height:100%;">
	<div class="taeduri" style="float:left">
		<%
		
		
		Document document = Jsoup.connect("http://weather.naver.com/rgn/townWetr.nhn").get();
		
		if (null != document) 
		{
			/*
			Elements Weatherelements = document.select("div.w_now2 img");
			Elements elements = document.select("div.w_now2 h5");
			Elements elements1 = document.select("div.w_now2 em");
			
		      
		    for (int i = 0; i < Weatherelements.size(); i++) 
		    {
		    	System.out.println(Weatherelements.get(i).attr("src"));
		    }
		    
			out.println("<img src=\"" + Weatherelements.get(0).attr("src") + "\"> ");
		    out.println("</div>");
		    out.println("<div class=\"taeduri\" style=\"float:left\">");
		    out.println(elements.get(0).text() + "<br>");
			out.println(elements1.get(0).text());
			out.println("</div>");
			*/
			Elements Weatherelements = document.select("div.w_now2 img");
			
			System.out.println(Weatherelements.size());
			for (int i = 0; i < Weatherelements.size(); i++) 
		    {
				out.println(i + " <img src=\"" + Weatherelements.get(i).attr("src") + "\"> " +  Weatherelements.get(i).attr("alt") +" <br>");
		    }
			
			Weatherelements = document.select("table.tbl_today3 img");
			
			System.out.println(Weatherelements.size());
			for (int i = 0; i < Weatherelements.size(); i++) 
		    {
				out.println(i + " <img src=\"" + Weatherelements.get(i).attr("src") + "\"> " +  Weatherelements.get(i).attr("alt") +" <br>");
				System.out.println(i + " <img src=\"" + Weatherelements.get(i).attr("src") + "\"> " +  Weatherelements.get(i).attr("alt") +" <br>");
		    }
		}
		%>
</div>
<iframe src="http://weather.naver.com/rgn/townWetr.nhn"></iframe>

</body>
</html>