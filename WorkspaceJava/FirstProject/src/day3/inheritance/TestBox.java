package day3.inheritance;

public class TestBox {

	public static void main(String[] args) 
	{
		Box fedex = new Box();
		fedex.calculateArea(3, 4);

		childBox ups = new childBox();
		ups.calculateArea(4, 2);    // example of OVERRIDING . Method in the subclass has the same signature and takes precedence
		ups.calculateVolume(3, 4, 5);   
	
	
	}
	

}
