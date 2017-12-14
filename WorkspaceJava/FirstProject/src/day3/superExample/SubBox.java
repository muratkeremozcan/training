package day3.superExample;

public class SubBox extends Box{

	public double calculateVolume (int length, int width, int height)
	{
		double volume = super.calculateArea(length, width) * height;  // super keyword is used to access parent class' objects or methods
		System.out.println("The volume is = " + volume);
		return volume;
		
	}
}
