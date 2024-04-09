package com.warren.gate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
@Controller
public class GateApplication {

    public static void main(String[] args) {
        SpringApplication.run(GateApplication.class, args);
    }

    @GetMapping("/")
    public String index() {
        return "gate"; 
    }

    @GetMapping("/home")
    public String home() {
        return "gate"; 
    }

    @GetMapping("/projects")
    public String projects() {
        return "projects";
    }

    @GetMapping("/crm")
    public String crm() {
        return "crm";
    }

    @GetMapping("/scheduling")
    public String schedule() {
        return "schedules";
    }

    @GetMapping("/finance")
    public String finances() {
        return "finance";
    }

    @GetMapping("/documents")
    public String documents() {
        return "documents";
    }

}
