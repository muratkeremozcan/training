package day4.errorHandling.throwAndthrows;

public class ProgB {

	public static void main (String[] args)
	{
		ProgA obj = new ProgA();  // object of type ProgA
		
		try 
		{
			System.out.println(obj.divideNums(10, 0));
		}
			catch (Exception e)
			{
				System.out.println("ProgB :  " + e.getMessage());   // this catches the exception ProgA throws here
			}
		
	}
}
