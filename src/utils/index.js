import { BASE_SPACING } from '../constants'

// Base Spacing function to use in styles
export const bs = (factor = 1) => `${BASE_SPACING * factor}px`

// Create a media query
export const mq = breakpoint => `@media (min-width: ${breakpoint})`
