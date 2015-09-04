using UnityEngine;
using System.Collections;

public class highscore : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnGUI()
	{
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, new Vector3(4, 4, 4));
		GUI.Label(new Rect(200, 165, 120, 20), "HighScore: " + playerScript.HighScore.ToString ());
	}
}
