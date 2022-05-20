import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'

// https://vitejs.dev/config/
export default mergeConfig(
  {
    mode: 'dev', 
  },
  baseConfig
)

