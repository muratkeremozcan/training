package com._4genericClassEx;

import java.util.HashMap;

public class DemoGenCalculte {

	public static void main(String[] args) 
	{
	
		
			
		GenCalculate<Integer, String> obj2 = new GenCalculate<Integer, String>(10, "Test");	// have to specify what are those T and S, it can be ANYTHING
		obj2.printOut();
		
		HashMap<String, Double> hm = new HashMap<String, Double>();   // hashmap is also a generic class. Hit F3 on 'HashMap' to bring up the code!
	}


}
