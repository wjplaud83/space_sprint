#pragma strict

	public float delayTime = 3; //unexpected semicolon

	IEnumerator Start ()
	{
		yield return new WaitForSeconds(delayTime); //expected semicolon
		Application.LoadLevel(1);
	}


