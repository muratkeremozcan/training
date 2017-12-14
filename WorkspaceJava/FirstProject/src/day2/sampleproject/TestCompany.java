package day2.sampleproject;

public class TestCompany 
{

	public static void main (String[] args)
	{
		//instantiate the objects that use the Employee class, and pass the parameters for name and grade
		Employee alex = new Employee("Alex Rodriguez", 6);
		Employee linda = new Employee("Linda Berry", 7);
		Employee john = new Employee("John Doe", 3);   
		Employee sara = new Employee("Sara Time", 7); 
		Employee james = new Employee("James Son", 4);
		
		Department sales = new Department("Sales"); // consructor sets the budget as 50000 automatically
		Department IT = new Department("IT");
		
		
		sales.addEmployee(alex);   // the addEmployee method adds each employee obje
		sales.addEmployee(linda);
		sales.addEmployee(john);
		
		IT.addEmployee(sara);
		IT.addEmployee(james);
		
		sales.describe();
		IT.describe();
		 
	}
}
