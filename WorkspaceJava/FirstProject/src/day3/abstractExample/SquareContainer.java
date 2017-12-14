package day3.abstractExample;

public class SquareContainer extends Container 
{
	
	public double calculateAreaOfBase(int length) // overriding the parent's abstract method
	{
		double area = length * length;
		System.out.println("Area " + area);
		return area;
		
	}
	
}
