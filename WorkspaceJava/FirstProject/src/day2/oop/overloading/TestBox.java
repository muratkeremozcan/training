package day2.oop.overloading;

public class TestBox 
{
	public static void main (String[] args)
	{
		Box obj = new Box();
		obj.calculateArea(4);    //polymorphism > overloading
		obj.calculateArea(3.7);
		obj.calculateArea(2, 4);
		
	
	}
	
}