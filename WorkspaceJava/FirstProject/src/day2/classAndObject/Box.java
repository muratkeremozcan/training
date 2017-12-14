package day2.classAndObject;

public class Box 
{

		int length;
		int width;
		
		int calculateArea(int length, int width)
		{
			int area = this.length * width;
			System.out.println("Area = " + area);
			return area;
		}
}
