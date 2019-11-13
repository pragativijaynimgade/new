package skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login {
	WebDriver driver;
	@Given("user opens application testmeapp in browser")
	public void user_opens_application_testmeapp_in_browser() {
		System.setProperty("webdriver.ie.driver","C:\\NexGen Testing Stream\\Drivers\\IEDriverServer_Win32_3.14.0\\IEDriverServer.exe");
		driver=new InternetExplorerDriver();
	    driver.manage().window().maximize();  
		driver.get("http://localhost:8083/TestMeApp/");
		Actions a=new Actions(driver);
		a.moveToElement(driver.findElement(By.partialLinkText("SignIn"))).click().perform(); 
	   
	}

	@When("user enters username {string} in the field")
	public void user_enters_username_in_the_field(String username) {
	    driver.findElement(By.name("userName")).sendKeys(username);
	}

	@When("user enters password {string} in the field")
	public void user_enters_password_in_the_field(String password) {
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@When("clicks login button")
	public void clicks_login_button() {
		driver.findElement(By.name("Login")).click();
	}

	@Then("validates successfull login")
	public void validates_successfull_login() {
	   System.out.println("Login failed");
	}
}
