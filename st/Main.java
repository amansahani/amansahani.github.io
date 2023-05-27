package com;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.HashMap;

public class Main {
	public static void main(String[] args) {
		HashMap<Object, String> map = new HashMap<Object, String>();
		  
		map.put(0,"bkEvMb");
		map.put(1,"N10B9");
		map.put(2,"lVjWed");
		map.put(3,"KN1kY");
		map.put(4,"xAP7E");
		map.put(5,"Ax5wH");
		map.put(6,"abcgof");
		map.put(7,"rk7bOd");
		map.put(8,"T7PMFe");
		map.put(9,"XoxYJ");
		map.put("equals","Pt8tGc");
		map.put("plus","XSr6wc");
		map.put("minus","pPHzQc");
		map.put("multiply","YovRWb");
		map.put("divide","WxTTNd");
		
		String text1= Calc(map.get(2), map.get(3),map.get("plus"));
		System.out.println("The result is: " + text1);
		
		String text2= Calc(map.get(6), map.get(4),map.get("minus"));
		System.out.println("The result is: " + text2);
		
		String text3= Calc(map.get(5), map.get(7),map.get("multiply"));
		System.out.println("The result is: " + text3);
		
		String text4= Calc("10", map.get(5),map.get("divide"));
		System.out.println("The result is: " + text4);
	
	}
	
	static String Calc(String op1, String op2, String operator){
		String text="";
		WebDriver driver = new ChromeDriver();
		try {
			driver.get("https://www.google.com/ncr");
			WebElement searchBox = driver.findElement(By.name("q"));
			searchBox.sendKeys("calculator", Keys.RETURN);
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofMillis(1000));
			wait.until(ExpectedConditions.titleIs("calculator - Google Search"));

		if(!op1.equals("10")) {
			WebElement operand1 = driver.findElement(By.xpath("//*[@jsname='"+op1+"']"));
			operand1.click();

			WebElement operate = driver.findElement(By.xpath("//*[@jsname='"+operator+"']"));
			operate.click();

			WebElement operand2 = driver.findElement(By.xpath("//*[@jsname='"+op2+"']"));
			operand2.click();

			WebElement equalsElement = driver.findElement(By.xpath("//*[@jsname='Pt8tGc']"));
			equalsElement.click();
		}else {
			WebElement operand1 = driver.findElement(By.xpath("//*[@jsname='N10B9']"));
			operand1.click();
			driver.findElement(By.xpath("//*[@jsname='bkEvMb']")).click();

			WebElement operate = driver.findElement(By.xpath("//*[@jsname='"+operator+"']"));
			operate.click();

			WebElement operand2 = driver.findElement(By.xpath("//*[@jsname='"+op2+"']"));
			operand2.click();

			WebElement equalsElement = driver.findElement(By.xpath("//*[@jsname='Pt8tGc']"));
			equalsElement.click();
			
		}

		WebElement resultElement = driver.findElement(By.xpath("//*[@jsname='VssY5c']"));
		text = resultElement.getText();
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		} finally {
			driver.quit();
		}
		return text;
	}
}