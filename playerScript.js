#pragma strict

	var float: speed = 0.1F;
	var myInt : Score = 0;
	var myInt : HighScore = 0;
	var myint : Lives = 5;
	var GameObject ExplosionPrefab; //error


// Use this for initialization
function Start () {
	HighScore = PlayerPrefs.GetInt("HighScore");
}

// Update is called once per frame
function Update () {

	//movement speed of ship
		if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
			Vector2 touchDeltaPosition = Input.GetTouch(0).deltaPosition;	//error
			transform.Translate(touchDeltaPosition.x * speed, touchDeltaPosition.y * speed, 0);

			Vector3 playerSize = renderer.bounds.size;	//error

			//screen boundary
			var distance = (transform.position - Camera.main.transform.position).z;

			var leftBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 0, distance)).x + (playerSize.x/2);
			var rightBorder = Camera.main.ViewportToWorldPoint (new Vector3 (1, 0, distance)).x - (playerSize.x/2);
			var bottomBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 0, distance)).y + (playerSize.y/2);
			var topBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 1, distance)).y - (playerSize.y/2);

			transform.position = (new Vector3 (
				Mathf.Clamp (transform.position.x, leftBorder, rightBorder),
				Mathf.Clamp (transform.position.y, bottomBorder, topBorder),
				transform.position.z)
			                      );
	
				}
				if (Score > HighScore)
				// set HighScore from current is higher
				HighScore = Score;
				// To save it
				PlayerPrefs.SetInt("HighScore", HighScore);
				}

				function OnGUI()
				{
				GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, new Vector3(3, 3, 3));
				GUI.Label (new Rect(10, 10, 120, 20), "Score: " + playerScript.Score.ToString ());
				GUI.Label (new Rect(10, 30, 120, 20), "HighScore: " + playerScript.HighScore.ToString ());
				GUI.Label (new Rect(10, 50, 120, 20), "Lives: " + playerScript.Lives.ToString ());
			}
			function OnTriggerEnter2D(Collider2D)
			{
				playerScript.Lives--;
				shipScript enemy = (ShipScript)gameObject.GetComponent("player");

				StartCoroutine(DestroyShip());
			}

			IEnumerator DestroyShip()
			{
				Instantiate(ExplosionPrefab, transform.position, Quaternion.identity);
				gameObject.renderer.enabled = false;
				transform.position = new Vector3(transform.position.x, transform.position.y, transform.position.z);
				yield WaitForSeconds(0.1f);
				if (playerScript.Lives > -1)
					gameObject.renderer.enabled = true;
				else
					Application.LoadLevel("gameover");
			}
			
