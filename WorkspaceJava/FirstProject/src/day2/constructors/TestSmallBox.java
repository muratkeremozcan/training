package day2.constructors;

public class TestSmallBox {

	public static void main(String[] args) 
	{
		
		SmallBox obj = new SmallBox();
		obj.calculateArea();

		SmallBox ups = new SmallBox(3,4);
		ups.calculateArea(); 
	}

}
