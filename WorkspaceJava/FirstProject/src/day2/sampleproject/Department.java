package day2.sampleproject;

import java.util.List;
import java.util.ArrayList;

public class Department 
{
	private String departmentName;
	private double budget;
//	private int employeeCounter = 0;   // if we are not using array but we are using array list, this is not needed
	
	public Department (String departmentName)
	{
		this.departmentName = departmentName;
		this.budget = 50000; //it's a constant so set it right here
	}
	
//	private Employee [] emps = new Employee[5];  // private array of type Employee, named employees, and then instantiate employees . Max 5 employees for now.

	// the association in UML is because of this . Deparment knows about Employee because of this. 
	private List<Employee> emps = new ArrayList<Employee>();   // instead of a regular array, use an array list because the department can have any number of employees
	
	public void addEmployee(Employee employeeObject) // this method takes in an object of type Employee, puts it in an array, moves the array slot to the next
	{
		
//		emps[employeeCounter] = employeeObject;   // if we are not used array but we are using array list, we cannot use this
		emps.add(employeeObject);   			 // instead we use add method of List class 
//		employeeCounter++;						// if we are not using array but we are using array list, this is not needed
		
		if(employeeObject.getGrade() >= 5)   // requirement in yellow
		{
			budget += 150000;
		}
		else
		{
			budget += 100000;
		}
		
	
		
		
	}
	
	public void describe()
	{
		String temp = "Department name: " + this.departmentName + "\nBudget: " + this.budget + "\nEmployees: " ;
		System.out.println(temp);
		
		for(Employee x : emps) // loop through the array
		{
//			if (x != null){  // if we are not using array but we are using array list, this is not needed because we dont' have to check for null objects
				System.out.println(x.getEmpName() + " " + x.getGrade() );
//			}
		}
			
	}
	
	
	
}
