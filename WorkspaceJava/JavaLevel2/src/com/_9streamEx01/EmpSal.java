package com._9streamEx01;


public class EmpSal 
{
	String name;
	double salary;

	public EmpSal(String name, double salary)
	{
		this.name = name;
		this.salary = salary;
	}
	
	public String toString()
	{
	return this.name + " " + this.salary;
	}
}