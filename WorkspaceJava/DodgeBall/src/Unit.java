package DodgeGameProject;

public abstract class Unit // Abstract class: I do not want Unit class to be instatiated
{
	public Unit(int x, int y, String unitGraphic) // constructor with initial values (signature), Unit(x, y, unitGraphic)        {
	{ // we declare them,
		this.UnitGraphic = unitGraphic; // call the function Unit and pass 3 parameters
		this.setX(x); // if you had an empty constructor like Unit() C# would set defaults
		this.setY(y);
	}

	public String UnitGraphic;
			// UnitGraphic can be a property (with get and set) versus a variable
	//{     // effectively having a public variable is the same thing : public string Unitgraphic
	//	get; 
	//	set;
	//} 

	private int _x; // private variable
	public final int getX()
	{
		return _x; // you can read the value
	}
	public final void setX(int value)
	{
		if (value < 0 || value >= Console.WindowWidth)
		{
			throw new RuntimeException("Invalid X coordinate passed.");
		}
		Undraw(); // we are moving, so undraw the old character first and then draw the new in the next line
		_x = value; // but you cannot publicly set it. This is where the value of x is actually set.
	}

	private int _y; // private variable,
	public final int getY()
	{
		return _y; // you can read the value
	}
	public final void setY(int value)
	{
		if (value < 0 || value >= Console.WindowHeight)
		{
			throw new RuntimeException("Invalid Y coordinate passed.");
		}
		Undraw(); // we are moving, so undraw the old character first and then draw the new in the next line
		_y = value; // but you cannot publicly set it. This is where the value of y is actually set.
	}

	public void Update(int deltaTimeMS) //Update will require a delta time in milliseconds
								  // update function, this is a function(method, subroutine,procedure) that gets run every frame
								  // VIRTUAL indicates to C# to do more howework when Update() function gets called, check which Update should be called
								  // goes hand in hand with override in sub class' Update() function:  override public void Update()
	{ // the idea is all units update themselves every frame.

	}

	public void Draw() //draw function, this is a function(method, subroutine,procedure) that draws on the screen. When it's virtual , the children can overwrite it
	{
		// this is an instance method, if we refer to x and y we will be using the values that belong to this instance only
		Console.SetCursorPosition(this.getX(), this.getY());
		System.out.print(this.UnitGraphic);
	}

	public final void Undraw() // we will use this to undraw the old char before drawing the new
	{
		Console.SetCursorPosition(this.getX(), this.getY()); //set the cursor
		System.out.print(' '); //write a blank character
	}

	public final boolean IsCollidingWith(Unit other)
	{
		// "this.X of this.Y" is the current unit, "other.X or other.Y is the other unit"
		if (this.getX() == other.getX() && this.getY() == other.getY()) //if player and enemy are in the same x,y coordiante, we are colliding)
		{
			return true;
		}
		return false;
	}


}