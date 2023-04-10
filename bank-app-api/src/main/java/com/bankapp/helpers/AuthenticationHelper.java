package com.bankapp.helpers;


import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuthenticationHelper {
    public static void logout(HttpServletRequest request,HttpServletResponse response) {
        request.getSession().invalidate();
        response.addCookie(new Cookie("JSESSIONID",""));
        response.addCookie(new Cookie("X-XSRF",""));
    }
}
