package com;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumRegistrationAndLoginScript {
    public static void main(String[] args) {
       

        // Create a new ChromeDriver instance
        WebDriver driver = new ChromeDriver();

        // Registration process
        driver.get("https://amansahani.github.io/st/registration.html");

        // Fill in the registration form
        driver.findElement(By.id("username")).sendKeys("testuser");
        driver.findElement(By.id("password")).sendKeys("testpassword");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        // Add assertions or verification steps for successful registration

        // Login process
        driver.get("https://amansahani.github.io/st/login.html");

        // Fill in the login form
        driver.findElement(By.id("username")).sendKeys("testuser");
        driver.findElement(By.id("password")).sendKeys("testpassword");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        // Add assertions or verification steps for successful login

        // Close the browser
        driver.quit();
    }
}
