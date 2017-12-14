package day2.classAndObject;

public class TestEmployee {

	public static void main(String[] args) 
	{
	
		  /*Employee alex, linda, john;
			
			alex = new Employee();
			linda = new Employee();
			john = new Employee();  */
		
			Employee alex = new Employee();
			Employee linda = new Employee();
			Employee john = new Employee();
			
			alex.salary = 90000;
			alex.bonus = 2000;
			alex.calculateTotalPay();
	}

}
