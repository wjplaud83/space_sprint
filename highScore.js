#pragma strict 

	// Use this for initialization
	function Start () 
	{
	
	}
	
	// Update is called once per frame
	function Update () 
	{
	
	}

	function OnGUI()
	{
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, new Vector3(4, 4, 4));
		GUI.Label(new Rect(200, 165, 120, 20), "HighScore: " + playerScript.HighScore.ToString ());
	}
