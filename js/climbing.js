/**
 * Title: feature_player.js
 *
 * Script for climbing.html page
 * Don't forget to load the script in <head> using <script src="../js/climbing.js" async></script>
 */

/* Load Embedded YouTube feature video */

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube API will replace <div id="feature_player" vid="videoID"> tag with an
// iframe element containing the youtube video
var player;
function onYouTubeIframeAPIReady() {
    var vid = feature_player.getAttribute('vid')
    player = new YT.Player('feature_player', {
			height: '410',
			width: '620',
			videoId: vid,
			playerVars: {
				'playsinline': 1
			},
			events: {
				//'onReady': onPlayerReady
			}
		});
}
