import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8pv85quf',
    dataset: 'production'
  },
  deployment: {
    appId: 'yridedrcez0xxzbpwymtkp3c',
    autoUpdates: true,
  }
})
