import { defineAppSetup } from 'valaxy'

import Tres from '@tresjs/core'

export default defineAppSetup(({ app }) => {
  app.use(Tres)
})
