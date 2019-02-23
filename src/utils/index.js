import { BASE_SPACING } from '../constants'

// Base Spacing function to use in styles
export const bs = (factor = 1) => `${BASE_SPACING * factor}px`

// Create a media query
export const mq = breakpoint => `@media (min-width: ${breakpoint})`

// We want episodes to format like 001, 002, 010
export const formatEpisodeNumber = number => number.toString().padStart(3, '0')

export const createEpisodeEmbed = id =>
  `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>`
