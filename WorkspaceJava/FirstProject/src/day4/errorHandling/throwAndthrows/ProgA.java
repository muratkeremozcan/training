package day4.errorHandling.throwAndthrows;

public class ProgA {

	public int divideNums (int a, int b)  throws Exception // takes two integers and divides them . Needs throws Exception if 'throwing new exception (line 17) '
	{
		int c = 0;
		
		try 
		{
			c = a/b;
			return c;
		}
			catch (Exception e)
			{
				System.out.println("Program A exception ");          // when someone else throws exception, we catch it and print something for our own information, at the same time in the next line we throw it back
				throw new Exception("Please check your numbers " );  // we don't know what ProgB can do to throw an exception, so we throw the exception to ProgB in case it f's up. Throw new enables us to give a message to the other program
			}
	}
}
