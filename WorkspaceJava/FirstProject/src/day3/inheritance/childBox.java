package day3.inheritance;

public class childBox extends Box   // this is the child class/sub class . All methods BUT private methods of parent are brought over
{

	public void calculateVolume (int length, int width, int height)
	{
		System.out.println("Volume " + (length*width*height));
	}
	
	public void calculateArea (int length, int width)
	{
		System.out.println("Sub Area " + (length/width));  // child class takes precedence over parent class for this method
	}
}
