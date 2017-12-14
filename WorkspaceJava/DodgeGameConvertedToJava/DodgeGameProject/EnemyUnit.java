package DodgeGameProject;

public class EnemyUnit extends Unit // EnemyUnit class is a child of Unit class
{ // this is a generic enemy unit that moves from right to left side of screen and disappears
	public EnemyUnit(int x, int y, String unitGraphic)
	{ //EnemyUnit construct requires 3 parameters because it's a child class of Unit which is in format Unit(int x, int y, string unitGraphic)
		super(x, y, unitGraphic);
		// be dormant for up to 1 second
		sleepForMS = Game.Random.nextInt(3000);
//C# TO JAVA CONVERTER TODO TASK: There is no two-argument version of 'nextInt' in Java:
		TimeBetweenMoves = Game.Random.nextInt(40, 60); // rate between 40 and 60fps
	} //and we still pass the parameters (x, y, unitGraphic) to the base class Unit

	public int TimeBetweenMoves; // in milliseconds, initially this was 100, then it became 40-60 above

	private int timeSinceLastMove; // how we track the time since the last time we moved, initially 0

	private int sleepForMS; // have enemy units sleep for a certain amount of time so they appear randomly

	@Override
	public void Update(int deltaTimeMS) // need to match Update function in parent class which has int deltaTimeMS
	{
		// when the ENEMY's update function gets called, execute this Update() function instead of parent class Unit's Update() function
		// goes hand in hand with parent classes' virtual public void Update() function


		//when we update, decrease sleepForMS by the amount of time that has passed
		sleepForMS -= deltaTimeMS;
		// sleepForMS = sleeForMS - deltaTimeMS;

		// if we are still asleep do nothing)
		if (sleepForMS > 0)
		{
			return;
		}

		// has enough time (100 milliseconds) passed that we should be moving. We are only updating this if we are awake
		timeSinceLastMove += deltaTimeMS;
		// timeSinceLastMove = timeSinceLastMove + deltaTimeMS;

		if (timeSinceLastMove < TimeBetweenMoves)
		{
			return; // if not enough time (100 milliseconds) has passed, do not do anything and exit the function
		}

		// if we get here, (132milliseconds have passed) , leave timeSinceLastMove to be 32 (sometimes moves every 132 milliseconds, sometimes less than 100)
		timeSinceLastMove = timeSinceLastMove - TimeBetweenMoves;

		if (getX() > 0)
		{
			setX(getX() - 1); // move to the left
		}
		else
		{
			// we are at a move limit, let's move back to the right side of the screen
			setX(Console.WindowWidth - 1);

			// randomize the row and sleep randomly for a little bit. Do not spawn on the bottom row 
			// in Draw function, ensure nothing is drawn until sleepForMS is 0
			setY(Game.Random.nextInt(Console.WindowHeight - 1));
			sleepForMS = Game.Random.nextInt(3000);

			// numEnemies = numEnemies+10;

			//every time enemies spawn they get a little faster
			TimeBetweenMoves = TimeBetweenMoves * 90 / 100;
			if (TimeBetweenMoves < 10)
			{
				TimeBetweenMoves = 10;
			}
			// every time we hit the side of the screen, give the player a point
			Game.Score++;
			Game.NumEnemies++;
		}


		super.Update(deltaTimeMS); // base goes up the chain to the parent and runs the parent's Update function)
	}

	@Override
	public void Draw() // I am overrideing Unit class' Draw() function
	{
		if (sleepForMS > 0) // if still asleep, do not draw us yet
		{
			return;
		}
		// otherwise we are awake
		super.Draw(); // instead call the parent Draw() function

	}
}