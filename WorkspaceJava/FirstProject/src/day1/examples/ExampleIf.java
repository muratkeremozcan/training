package day1.examples;

public class ExampleIf {

	public static void main(String[] args) 
	{
		int x = 20;
		int y = 20;
		
		if (x < y)
		{
			System.out.println("X is less than Y");
		}
		
		else if (x == y)	// only checks if x < y
		{
			System.out.println("X is equal to Y");
		}
		
		else	// (x > y) only checks if x !<  y and x!=
		{
			System.out.println("X is greater than Y");
		}

	}

}
