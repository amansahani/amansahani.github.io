package com;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Registration {

    public static void main(String[] args) {

        // Create a new instance of the ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Navigate to the registration page
        driver.get("http://localhost:5000/register.php");

        // Wait for the page to load
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(1));
        wait.until(ExpectedConditions.titleContains("Registration Form"));

        // Fill in the registration form
        WebElement usernameField = driver.findElement(By.name("username"));
        usernameField.sendKeys("my_username");

        WebElement emailField = driver.findElement(By.name("email"));
        emailField.sendKeys("my_email@example.com");

        WebElement passwordField = driver.findElement(By.name("password"));
        passwordField.sendKeys("my_password");

        WebElement submitButton = driver.findElement(By.name("submit"));
        submitButton.click();


        System.out.println("Registration successfull");

        // Close the browser
        driver.quit();
    }
}
