/* eslint-disable */
import mitt from 'mitt'
import amplitude from 'nuxt-amplitude-plugin'
import { LeankoalaClient } from '@webpros/360-api-client'
import KoalityGuide from '@webpros/koality-guide-client'

declare module '#app' {
  interface NuxtApp {
    $apiClient: LeankoalaClient,
    $clientRepo: LeankoalaClient,
    $guideClient: KoalityGuide,
    $amplitude: amplitude
  }
}

declare module '@vue/runtime-core' {
}

declare global {
  interface Window {
    mitt?: mitt
  }
}

export { }
