import React, { useRef, useEffect } from 'react'
import { Box } from '@mui/material'

function YouTubePlayer({ videoId }) {
  const playerRef = useRef(null)

  useEffect(() => {
    // Load the YouTube Iframe API script
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(script)

    // Initialize the player when the API script is loaded
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
        },
      })
    }
  }, [videoId])

  return (
    <Box>
      <Box ref={playerRef} className="video-container" />
    </Box>
  )
}

export default YouTubePlayer
