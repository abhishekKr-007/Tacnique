package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

  @GetMapping("/")
  public String index(Model model) {
    List<Map<String, String>> employees = List.of(
      Map.of("id", "E101", "firstName", "Alice", "lastName", "Smith", "email", "alice@example.com", "department", "HR", "role", "Manager"),
      Map.of("id", "E102", "firstName", "Bob", "lastName", "Brown", "email", "bob@example.com", "department", "IT", "role", "Developer")
    );

    model.addAttribute("employees", employees);
    return "index";
  }

  @GetMapping("/form")
  public String form() {
    return "form";
  }
}
