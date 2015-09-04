using UnityEngine;
using System.Collections;

public class gameover : MonoBehaviour
{
	public bool isQuit = false;

	// Update is called once per frame
	void OnTouchDown()
	{
	if(isQuit)
		{
			Application.Quit();
	}
		else
		{
			playerScript.Score = 0;
			playerScript.Lives = 5;
			Application.LoadLevel(2);
		}
}
}
