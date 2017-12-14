package com._7annotationEx;

import com._3genericEx.Calculate;

public class TestEmployee {

	public static void main(String[] args) 
	{
		Employee alex = new Employee();
		
		alex.AssignEmployeeValues(100000, 34, "IT");
		
		
		
		
		try
		{
			Validator.Validate(alex);
		}
			catch (Exception e)
			{
				System.out.println(e.getMessage());
			}
			
		/*
		// you can try to validate another object
		System.out.println("\n\n_______________________________________________________________");
		Calculate calc = new Calculate();
		
		try
		{
			Validator.Validate(calc);
		}
			catch (Exception e)
			{
				System.out.println(e.getMessage());
			}

		*/
		
		
	}

}
