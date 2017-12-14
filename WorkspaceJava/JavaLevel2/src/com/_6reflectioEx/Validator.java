package com._6reflectioEx;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
//REFLECTION IS the ability for us to find out INFORMATION about a particular object or class  
// From the objec,t you can get infoo about the name of the class, the methods of the class , the parameters of that method (datatype only) and field names

public class Validator
{
	
	public static <T> void Validate(T data) throws IllegalArgumentException, IllegalAccessException  // T makes it a generic method
	{
		// System.out.println(data.getClass());
		
		
		// THIS IS HOW YOU GET THE CLASS NAME FROM AN OBJECT
		Class<?> reflectionClass = data.getClass();   // this will accept any class 
		System.out.println("Class name " + reflectionClass.getSimpleName());
		
		
		// THIS IS HOW YOU GET THE METHODS FROM AN OBJECT
		Method[] methods = reflectionClass.getDeclaredMethods();
		for (Method tempMethod : methods)
		{
			
			System.out.println(tempMethod.getName());							// PRINT OUT THE NAME OF THE METHOD
			System.out.println("return type of method: " + tempMethod.getReturnType());	// PRINT OUT THE RETURN TYPE OF THE METHOD
			
			
		
			
			// THIS IS HOW YOU GET THE PARAMETERS OF THAT METHOD (only the type, not the type)
			Parameter[] params = tempMethod.getParameters();
			for (Parameter tempParam : params)
			{
				System.out.println("parameter type " + tempParam.getParameterizedType());
			}
			
					
		}
		
		// THIS IS HOW YOU GET THE FIELD NAMES
		System.out.println("-----Field names-------");
		Field[] fields = reflectionClass.getDeclaredFields();
		for (Field tempField : fields)
		{
			System.out.println("Field type " + tempField.getName());
			System.out.println("Field type " + tempField.getType());
			System.out.println("Field value " + tempField.get(data));
		}
		
		
		
		
	}
		
	
	
}
 