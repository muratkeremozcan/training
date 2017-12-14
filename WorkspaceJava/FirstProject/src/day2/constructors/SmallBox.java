package day2.constructors;

public class SmallBox 
{
	int length;
	int width;
	
	// a constructor is a method that has the same name as the class. 
	// it is executed when an object of type that class is instantiated
	// it is used to set default values
	
	SmallBox()
	{
		this.length = 5;
		this.width = 6;
		System.out.println("Constructor fired");
	}	
	

	SmallBox (int length , int width) // constructor that sets the class level data with the value of 
	{
		this.length = length;
		this.width = width;
		
	}
	
	void calculateArea()
	{
		System.out.println("Area " + (length * width));
	}
	
}
