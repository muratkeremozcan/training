package day1.examples;

public class ExampleAndOr {

	public static void main(String[] args) 
	{
		int x = -10;
		int y = 10;
		
		if ( x > 0 & y > 0)
		{
			System.out.println("the numbers are positive");
		}
		else if ( x > 0 || y > 0 )
		{
			System.out.println("One of the numbers are positive");
		}
		else
		{
			System.out.println("both numbers are negative");
		}
		

	}

}
