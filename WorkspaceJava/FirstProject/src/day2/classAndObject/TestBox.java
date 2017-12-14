package day2.classAndObject;

public class TestBox {

	public static void main(String[] args) 
	{
		Box fedex = new Box();
		Box ups = new Box();
		
		fedex.length = 10;
		fedex.width = 5;
		int areaFedex = fedex.calculateArea(4, 2); // passing arguments takes precedence above class level data, unless you specify "this. "(which takes class level data)
		
		ups.length = 20;
		ups.width = 3;
		int areaUPS = ups.calculateArea(2, 5);   // passing arguments takes precedence above class level data 
		
		System.out.println("total area is " + (areaFedex + areaUPS));
		
	}

}
