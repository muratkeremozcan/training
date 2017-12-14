package day3.interfaceExample;

public class TestOffice {

	public static void main(String[] args) 
	{
		
		Office obj = new Word();  // declare as parent class, set as child class
		obj.Open();
		obj.Save();
		
		obj = new Excel();
		obj.Open();
		obj.Save();
		
		
		
	}

}
