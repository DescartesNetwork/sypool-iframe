import { env } from 'shared/runtime'
import manifest from './manifest.config'

const configs = {
  manifest: manifest[env],
}

/**
 * Module exports
 */
export default configs
