package day3.abstractExample;

public class TestContainer {

	public static void main(String[] args) 
	{
		CircleContainer c1 = new CircleContainer();
		SquareContainer s1 = new SquareContainer();
		
		c1.calculateVolume(10, 5);
		s1.calculateVolume(10, 5);

	}

}
