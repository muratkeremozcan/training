package day1.exercises;

public class ExerciseA {

	public static void main(String[] args) 
	{
		double salary = 78678.65;
		double tax;
		
			 if (salary <= 15000) { tax = salary * 0.1; }
		else if (salary > 40000)  { tax = salary * 0.3; }
		else					  { tax = salary * 0.2; }
			 
		System.out.println("Tax is = " + tax);
			
		

	}

}
