using UnityEngine;
using System.Collections;

public class ShipScript : MonoBehaviour
{

	public float speed = -11f;

	// Update is called once per frame
	void Update ()
	{
		transform.Translate(0f, speed * Time.deltaTime, 0f);
	}
}
