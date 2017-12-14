package com._7annotationEx;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

public class Validator
{
	
	public static <T> void Validate(T data) throws IllegalArgumentException, IllegalAccessException  // T makes it a generic method
	{
		
		// GET CLASS NAME
		Class<?> reflectionClass = data.getClass();   // this will accept any class 
		// System.out.println(data.getClass());
		System.out.println("Class name " + reflectionClass.getSimpleName());
		
		
		// GET METHOD NAMES
		Method[] methods = reflectionClass.getDeclaredMethods();
		for (Method tempMethod : methods)
		{
			System.out.println(tempMethod.getName());
			System.out.println("return type " + tempMethod.getReturnType());
			
			// GET PARAMETER NAMES
			System.out.println("===Parameter names===");
			
			Parameter[] params = tempMethod.getParameters();
			for (Parameter tempParam : params)
			{
				System.out.println("parameter type " + tempParam.getParameterizedType());
			}
			
					
		}
		// GET FIELD NAMES
		System.out.println("-----Field names-------");
		Field[] fields = reflectionClass.getDeclaredFields();
		for (Field tempField : fields)
		{
			System.out.println("Field type " + tempField.getName());
			System.out.println("Field type " + tempField.getType());
			System.out.println("Field value " + tempField.get(data));
		
			// GET ANNOTATIONS
			Annotation[] annos = tempField.getAnnotations();
			System.out.println("------Annotation names ");
			for (Annotation tempann : annos)
			{
				String ann = tempann.annotationType().getSimpleName();
				System.out.println(ann);
				
				switch (ann)
				{
				case "Nonnegative":
					if((Double)tempField.get(data) < 0)
					{
						throw new IllegalArgumentException(tempField.getName() + " is less than zero");
					}
				break;
				
				case "Range":
					Range ranno = tempField.getAnnotation(Range.class);
					int age = (int)tempField.get(data);
					if(age < ranno.min() || age > ranno.max())
					{
						throw new IllegalArgumentException(tempField.getName() + "not in range");
					}
				break;
				}
				
				
				
				
			}
				
		
		}
		
		
		
		
	}
		
	
	
}
