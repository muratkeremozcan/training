package day1.examples;

public class ExampleString {

	public static void main(String[] args) 
	{
		
		String x = "James Dean";
		
		System.out.println("Hello " + x);
		
		System.out.println("HELLO " + x.toUpperCase());
		
		System.out.println("hello " + x.substring(2));
		
		System.out.println("hello " + x.substring(2, 7));
		
		System.out.println("hello " + x.charAt(3));
		
		String age = "37";
		String salary = "78965.83";
		//wrapper classes
		int a = Integer.parseInt(age)/2;
		System.out.println(a+1);
		
		double s = Double.parseDouble(salary) * 2;
		System.out.println(s * 0.15);
		
		
		
	}

}
