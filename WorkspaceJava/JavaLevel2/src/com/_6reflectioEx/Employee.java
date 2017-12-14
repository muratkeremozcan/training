package com._6reflectioEx;

public class Employee 
{

	double salary;
	int age;
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
 