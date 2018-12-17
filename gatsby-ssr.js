/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

import Player from './src/components/Player'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  // ?Ola asks: maybe I don´t need images in the player? But is this the player?
  // ?Ola asks: add /*allImageFiles*/
  // ?Ola asks: What is ssr?
  const {
    pageContext: { allAudioFiles },
  } = props

  return (
    <Player audioFiles={allAudioFiles}>
      {({ play, pause, isPlaying, isValidAudioFileKey, selectedKey }) =>
        React.cloneElement(element, {
          play: play,
          pause: pause,
          isPlaying: isPlaying,
          isValidAudioFileKey: isValidAudioFileKey,
          selectedKey: selectedKey,
          key: 'SSR',
          isDisabled: true,
        })
      }
    </Player>
  )
}
