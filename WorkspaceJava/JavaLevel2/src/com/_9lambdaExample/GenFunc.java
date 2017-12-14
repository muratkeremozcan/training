package com._9lambdaExample;

public interface GenFunc<T, S> 
{
	S method (T t, S s);
}

//inbuilt in import java.util.function.*;
/*
public interface Function<T, R>{
R apply(T t);
}
public interface Predicate<T>{
boolean test(T t);
}
public interface BiFunction<T, U, R>{
R apply(T t, U u);
}
public interface Consumer<T>{
void accept(T t);
}
public interface Supplier<T>{
T get();
}
*/