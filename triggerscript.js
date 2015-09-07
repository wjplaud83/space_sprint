#pragma strict

function OnTriggerEnter2D(Collider2D)
	{
		shipScript enemy = (shipScript)gameObject.GetComponent("enemy"); //expected semicolon at the end 2x
		Destroy(other.gameObject);
		playerScript.Score +=1;
		playerScript.Score = playerScript.Score + 1;
	}
