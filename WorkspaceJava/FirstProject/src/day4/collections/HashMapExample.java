package day4.collections;

import java.util.HashMap;

public class HashMapExample {   //hasmap is used to store key value pairs

	public static void main(String[] args) 
	{
	//	HashMap hm = new HashMap();   this is the generic version
		
		HashMap<String, Double> hm = new HashMap<String, Double>();  // only these datatypes can be specified
		
		hm.put("Alex", 98765.45);
		hm.put("Linda", 108765.45);
		hm.put("John", 88765.45);
		
		System.out.println(hm.get("Linda"));

	}

}
