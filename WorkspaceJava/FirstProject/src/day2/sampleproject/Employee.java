package day2.sampleproject;

public class Employee 
{
	private String empName;
	private int grade;
	
	
	
	// CONSTRUCTOR : does the same thing set method (set through the below code)
	public Employee (String empName, int grade)
	{
		this.setEmpName(empName);
		this.grade = grade;
	}
	
	public int getGrade() {
		return grade;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	
	
	/* USING GETTERS AND SETTERS
	public String getEmpName()
	{
		return empName;
	}
	
	public void setEmpName(String empName)
	{
		this.empName = empName;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}*/
	
	
	
	
	
}
