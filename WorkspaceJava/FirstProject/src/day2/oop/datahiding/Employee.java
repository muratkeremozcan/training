package day2.oop.datahiding;

public class Employee 
{
	private double salary;
	void setSalary (double salary)
	{
		if (salary >= 40000 && salary <= 200000)
		{
			this.salary = salary;
		}
		else
		{
			this.salary = 0;
			System.out.println("Please check salary amount");
		}
	}
	
	
	public double getSalary()
	{
		return salary;
		
	}
	
	
	
	private double bonus;
	public double getBonus() {
		return bonus;
	}


	void setBonus (double bonus)
	{
		if (bonus <= 20000 && bonus >0)
		{
			this.bonus = bonus;
		}
		else 
		{
			
			this.bonus = 0;
			System.out.println("Please check bonus amount");
		}
		
		
	}
	
	
	public void calculateTotalPay()
	{
		double totalPay = salary + bonus;
		System.out.println("Total pay = " + totalPay);
	}
		
}
