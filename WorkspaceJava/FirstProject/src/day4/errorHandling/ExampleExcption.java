package day4.errorHandling;

public class ExampleExcption {

	public static void main(String[] args) {
		
		int d[] = new int[3];
		int a = 10;
		int b = 0;
		int c = 0; 
		
		
		try {  // whenever you think a block of code can break, you surround that block with try+catch block
		d[2]  = 10;		// to test array index exception
		c = a / b;		// to test arithmetic exception
		return;
		} 
			catch(ArrayIndexOutOfBoundsException e)     // catching different kinds of exception
			{
				System.out.println("ArrayIndexOut of bounds " + e);
			} 
			catch(ArithmeticException e) 				// catching different kinds of exception
			{
				System.out.println("ArithmeticException = " + e);
			}
			catch(Exception e) 
			{
				System.out.println("Exception occured " + e);  // if you want to know what kind of exception occured, print out that Exception object you declared
				e.printStackTrace();   //  this can tell you exactly where it happened
			} 
/*			catch(ArrayIndexOutOfBoundException | ArithmeticException e)   // you can also combine exception types with OR statement
			{
				System.out.println("Some message = " + e);   
			}
*/			
			finally
			{
				System.out.println("finally block always runs no matter whether there is an exception or not Or if there is a return in try");
			}
		
		System.out.println("c = " + c);
	}

}
