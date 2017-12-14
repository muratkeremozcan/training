package day1.examples;

public class ExampleArrays {

	public static void main(String[] args) 
	{

		int[] a = {10, 20, 30, 40, 50};
		
		
		for (int i = 0; i < 5; i++)
		{
		System.out.println(a[i]);
		}
		
		for (int j : a) // enhanced for statement
		{
			System.out.println(j);
		}
		
		int[] x = new int [5];
		x[3] = 25;
		x[0] = 12;
	
		for (int temp2 : x )
		{
			System.out.println(temp2);
		}
		
		
		String[] st = {"one", "two", "three"};
		
		for (String TEMP3 : st)
		{
			System.out.println(TEMP3);
		}
		

	}

}
