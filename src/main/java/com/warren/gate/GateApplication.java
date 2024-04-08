package com.warren.gate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;


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

    @GetMapping("/tasks")
    public String tasks() {
        return "tasks";
    }
}
