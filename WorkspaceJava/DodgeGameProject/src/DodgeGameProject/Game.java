package DodgeGameProject;

import java.util.*;

public class Game
{
	public Game() // the constructor, it gets run automatically when a new instance of Game is created
	{
		//these represent the player and the enemies
		//as soon as you create a new game, playerUnit and enemyUnit are instantiated

		//instantiate (create new instances of) class PlayerUnit and save it in a variable called playerUnit 
		playerUnit = new PlayerUnit(10, 20, "@");

		// set the existing random and use it 
		Random = new Random();

		// set the score to 0
		Score = 0;

		// instantiate the ARRAY that holds our enemies
		enemyUnits = new Unit[NumEnemies];
		// right now the array is instantiated but each slot is empty
		for (int i = 0; i < enemyUnits.length; i++) // repeat as many times as the length of the array, fill each slot in the array
		{
			int row = Random.nextInt(Console.WindowHeight - 1); // the row an array member/enemy spawns is a random number between the first row and the last
			enemyUnits[i] = new EnemyUnit(Console.WindowWidth - 1, row, "X"); // randomly dissipate on any row, an enemy for every array slot, each enemy starts at furthest right side of the screen
		} // all the way at the right, random ow, make "X"
		// instantiate the stopwatch
		stopwatch = new Stopwatch();
	}

	public static Random Random; // public static variable is shared by the class, not only to this instance of Game, it can be called elsewhere

	public static int Score; // same as Random, Score can be called elsewhere

	public static int NumEnemies = 80; // number of enemies, you can change them here

	private Stopwatch stopwatch; // a variable from Stopwatch class to measure time, this is used for random spawning of enemies

	private Unit playerUnit; // one player unit, from Unit class

	private Unit[] enemyUnits; // many enemy units, this is the array that holds them

	public final void Run() // as soon as you hit run, we update and draw playerUnit and enemyUnit
	{
		stopwatch.Start();
		long timeAtPreviousFrame = stopwatch.ElapsedMilliseconds; // time since stopwatch started, ElapsedMilliseconds is long not int

		while (true)
		{
			// the time since the last frame, force the long into int
			// let's say it took us 30 ms to process the first frame, at which point stopwatch.ElapsedMilliseconds is 30 and time at timeAtPreviousFrame is 0 
			// and then update the timeAtPreviousFrame to the new time (which is 30 ms), so that deltaTimeMS is always correct
			int deltaTimeMS = (int)(stopwatch.ElapsedMilliseconds - timeAtPreviousFrame);
			timeAtPreviousFrame = stopwatch.ElapsedMilliseconds;

			// update the player
			playerUnit.Update(deltaTimeMS);

			// For each enemy
			for (int i = 0; i < enemyUnits.length; i++)
			{
				// update the enemy
				enemyUnits[i].Update(deltaTimeMS);

				// see if the player unit is colliding with enemy unit , if so game over so return/break out of Run function
				if (playerUnit.IsCollidingWith(enemyUnits[i]))
				{
					GameOver();
					return;
				}
			}

			playerUnit.Draw(); // draw the player by calling the Draw function from Unit class

			// call the enemyUnits.Draw() function for each enemy
			for (Unit u : enemyUnits) // for each element of enemyUnits array , go through them and stuff them in the variable called u
			{
				u.Draw(); //call the Draw
			}

			// draw the score
			Console.SetCursorPosition(0, Console.WindowHeight - 1); // at the bottom left
			System.out.print("SCORE: " + String.valueOf(Score)); // concatonate the integer score converted to string

			// At first I set this to Thread.Sleep(deltaTimMS); where deltaTimeMS (time between frames) was 33ms (1000 ms / 30 FPS)
			// without that it was executing instantly, I wasn't seeing anything.
			// telling the CPU to not execute (delay) our current thread for a little bit. Guarantees time between frames to be at least 5 ms
			Thread.sleep(5);
		}
	}
	public final void GameOver()
	{
		Console.Clear();
		System.out.println("Game Over! Final Score: " + String.valueOf(Score)); // convert the integer of Score to string an prit it out
		Console.SetCursorPosition(0, Console.WindowHeight - 1);
	}
}