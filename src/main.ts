// Register elements.
import 'vidstack/player';
import 'vidstack/player/ui';
import 'vidstack/icons';

import { type TextTrackInit } from 'vidstack';

const player = document.querySelector('media-player')!;

// We can listen for the `can-play` event to be notified when the player is ready.
player.addEventListener('can-play', () => {
  // ...
});

// ***********************************************************************************************
// Text Track Management
// ***********************************************************************************************

/**
 * You can add these tracks using HTML as well.
 *
 * @example
 * ```html
 * <media-provider>
 *   <track label="..." src="..." kind="..." srclang="..." default />
 *   <track label="..." src="..." kind="..." srclang="..." />
 * </media-provider>
 * ```
 */
const tracks: TextTrackInit[] = [
  // Subtitles
  // Chapters
  {
    src: 'cues.json',
    kind: 'chapters',
    language: 'en-US',
    default: true,
  },
];

for (const track of tracks) {
  player.textTracks.add(track);
}
