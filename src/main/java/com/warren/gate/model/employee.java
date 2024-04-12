package com.warren.gate.model;

public class employee {
    private String name;
    private int age;
    private String position;
    private String email;


    public employee(String name, int age, String position, String email) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.email = email;

}


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public int getAge() {
        return age;
    }


    public void setAge(int age) {
        this.age = age;
    }


    public String getPosition() {
        return position;
    }


    public void setPosition(String position) {
        this.position = position;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }

}