import { createState } from '@hookstate/core'

const store = createState({
  tasks: [
    { text: 'Prepare for talk', status: 'not-completed' },
    { text: 'Fix bug with homepage', status: 'not-completed' },
    { text: 'Attend team meeting', status: 'not-completed' },
    { text: 'Move video files to external drive', status: 'not-completed' },
    { text: 'Record YouTube video', status: 'completed' },
    { text: 'Wrap up article', status: 'completed' }
  ]
})

export default store
