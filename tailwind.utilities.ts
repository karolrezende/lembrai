import type { PluginAPI } from 'tailwindcss/types/config'

const customUtilities = (api: PluginAPI) => {
  api.addUtilities({
    '.custom-width': {
      width: '80%',
      '@screen md': { width: '50%' },
      '@screen xl': { width: '30%' }
    }
  })
}

export default customUtilities
