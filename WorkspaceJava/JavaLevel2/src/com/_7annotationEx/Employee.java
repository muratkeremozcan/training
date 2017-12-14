package com._7annotationEx;

public class Employee 
{
	@NonNegative
	double salary;
	
	@NonNegative
	@Range(min = 18, max =  80)
	int age;
	
	@Remark(rmrk = "Enter the department id")
	String department;
	
	public void AssignEmployeeValues (double sal, int age, String dept)
	{
		this.salary = sal;
		this.age = age;
		this.department = dept;		
	}
	
	public double calculateTax()
	{
		return salary * .30;		
	}
	
	
}
 