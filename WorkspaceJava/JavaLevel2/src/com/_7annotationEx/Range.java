package com._7annotationEx;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface Range   // all annotations consist sole of method declarations
{

	int min();
	int max();
	
	
	
}
