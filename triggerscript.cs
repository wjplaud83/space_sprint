using UnityEngine;
using System.Collections;

public class TriggerScript : MonoBehaviour
{

void OnTriggerEnter2D(Collider2D other)
	{
		ShipScript enemy = (ShipScript)gameObject.GetComponent("enemy");
		Destroy(other.gameObject);
		playerScript.Score +=1;
		playerScript.Score = playerScript.Score + 1;
	}
}
