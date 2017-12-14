package com._9streamEx01;

public class Employee 
{
	String name;
	double salary;
	int age;

	public String getName() 
	{
		return name;
	}

	public double getSalary() 
	{
		return salary;
	}

	public int getAge() 
	{
		return age;
	}

	public Employee(String name, double salary, int age)
	{
	this.name = name;
	this.salary = salary;
	this.age = age;
	}

	public String toString()
	{
		return this.name + "(" + this.salary + ")";
	}
}