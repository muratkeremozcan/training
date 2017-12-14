package day3.abstractExample;

public class CircleContainer extends Container   //CHILD CLASS HAS NO IDEA THE PARENT IS ABSTRACT
{

	// override
	public double calculateAreaOfBase(int length) 
	{
		double area = Math.PI * (length / 2) * (length / 2);
		System.out.println("Circle area " + area);	
		return area;
	}
	
}
