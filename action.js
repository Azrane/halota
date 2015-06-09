var i, node;

function viewAchievements()
{
	var mccGame = document.getElementById('mccGame').value, 
	mccType = document.getElementById('mccType').value, 
	mccCategory = document.getElementById('mccCategory').value;
		
	for(i = 0; i < achData.length; i++)
	{
		if(document.getElementById('ap'+achData[i].ID) !== null)
		{
			if(mccGame === "allgames" || 
			(mccGame === "Halo1" && achData[i].Halo1 === true) || 
			(mccGame === "Halo2" && achData[i].Halo2 === true) || 
			(mccGame === "Halo3" && achData[i].Halo3 === true) || 
			(mccGame === "ODST"  && achData[i].ODST  === true) || 
			(mccGame === "Halo4" && achData[i].Halo4 === true) || 
			(mccGame === "Cross" && achData[i].Cross === true))
			{
				if(mccType === "alltypes" || 
				(mccType === "Campaign" && achData[i].Campaign === true) || 
				(mccType === "Multi" && achData[i].Multi === true) || 
				(mccType === "Play" && achData[i].Play === true))
				{
					if(mccCategory === "allcategories" || achData[i].Category === mccCategory)
					{
						document.getElementById('ap'+achData[i].ID).style.display = 'block';
					}
					else
					{
						document.getElementById('ap'+achData[i].ID).style.display = 'none';
					}
				}
				else
				{
					document.getElementById('ap'+achData[i].ID).style.display = 'none';
				}
				
			}
			else
			{
				document.getElementById('ap'+achData[i].ID).style.display = 'none';
			}
				
		}
	}
}

function toggleAchievements(a)
{
	if(a === true)
	{
		for(i = 0; i < achData.length; i++)
		{
			node = document.getElementById('ap'+achData[i].ID);
			if(node.classList.contains('green'))
			{
				node.style.display = 'none';
			}
		}
		//document.getElementById('hideachievementslink').onclick = 'toggleAchievements(false)';
		document.getElementById('hideachievementslink').innerHTML = '';
	}
	if(a === false)
	{
		for(i = 0; i < achData.length; i++)
		{
			viewAchievements();
		}
		document.getElementById('hideachievementslink').onclick = 'toggleAchievements(true)';
		document.getElementById('hideachievementslink').innerHTML = 'Hide Achievements I\'ve won';
	}
}
window.addEventListener("load", function() 
{
	var addedHTML = 
		'<table>\
			<tr>\
				<td style="width: 33%; text-align: center;">\
					<select id="mccGame">\
						<option value="allgames" selected="selected">All Games</option>\
						<option value="Halo1">Halo: CEA</option>\
						<option value="Halo2">Halo 2A</option>\
						<option value="Halo3">Halo3</option>\
						<option value="ODST">Halo 3: ODST</option>\
						<option value="Halo4">Halo 4</option>\
						<option value="Cross">Cross-Game</option>\
					</select>\
				</td>\
				<td style="width: 33%; text-align: center;">\
					<select id="mccType">\
						<option value="alltypes" selected="selected">All Game Types</option>\
						<option value="Campaign">Campaign</option>\
						<option value="Multi">Multiplayer</option>\
						<option value="Play">Playlists</option>\
					</select>\
				</td>\
				<td style="width: 33%; text-align: center;">\
					<select id="mccCategory">\
						<option value="allcategories" selected="selected">All Achievement Categories</option>\
						<option value="Campaign">Campaign</option>\
						<option value="Collectibles">Collectibles</option>\
						<option value="Kills">Kills</option>\
						<option value="Medals">Medals</option>\
						<option value="Miscellaneous">Miscellaneous</option>\
						<option value="Multiplayer">Multiplayer</option>\
						<option value="Playcount">Playcount</option>\
						<option value="Playlists">Playlists</option>\
						<option value="Score Attack">Score Attack</option>\
						<option value="Skulls">Skulls</option>\
						<option value="Spartan Ops">Spartan Ops</option>\
						<option value="Terminals">Terminals</option>\
						<option value="Time Attack">Time Attack</option>\
					</select>\
				</td>\
			</tr>\
			<tr>\
				<td style="width: 33%; text-align: center;"><a href="#" onclick=\'alert(\"In order for the list on True Achievements to match up with their in-game counterpart, click the blue View button and set the following:\\n\\nAchievement View: Uncheck \\\"Won First\\\" and set Xbox.com order.\\n\\nDLC: Uncheck \\\"Group DLC Packs together in list\\\" and set \\\"Filter\\\" to \\\"All DLC\\\"\\n\\nNow hit Apply!\");\'>How to match in-game list.</a></td>\
				<td style="width: 33%; text-align: center;">\
					<button id="mccSubmit" onclick="return false;">Check It</button>\
				</td>\
				<td style="width: 33%; text-align: center;"><a href="#" onclick=\'toggleAchievements(true)\' id=\'hideachievementslink\'>Hide Achievements I\'ve won</a></td>\
			</tr>\
		</table>';
	document.getElementsByTagName("h1")[1].insertAdjacentHTML('afterend', addedHTML);
	document.getElementById('mccSubmit').addEventListener("click", viewAchievements);
});
