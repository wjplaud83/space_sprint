#pragma strict

	public float delayTime = 3; 

	IEnumerator Start ()
	{
		yield WaitForSeconds(delayTime);
		Application.LoadLevel(1);
	}


