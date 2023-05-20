package com;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TestNGRegistrationAndLoginScript {
    private WebDriver driver;

    @BeforeMethod
    public void setup() {
        // Set the path to the ChromeDriver executable
   

        // Create a new ChromeDriver instance
        driver = new ChromeDriver();
    }

    @Test
    public void registrationTest() {
        // Open the registration page
        driver.get("https://amansahani.github.io/st/registration.html");

        // Fill in the registration form
        driver.findElement(By.id("username")).sendKeys("testuser");
        driver.findElement(By.id("password")).sendKeys("testpassword");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        // Add assertions or verification steps for successful registration
    }

    @Test
    public void loginTest() {
        // Open the login page
        driver.get("https://amansahani.github.io/st/login.html");

        // Fill in the login form
        driver.findElement(By.id("username")).sendKeys("testuser");
        driver.findElement(By.id("password")).sendKeys("testpassword");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        // Add assertions or verification steps for successful login
    }

    @AfterMethod
    public void teardown() {
        // Close the browser
        driver.quit();
    }
}
