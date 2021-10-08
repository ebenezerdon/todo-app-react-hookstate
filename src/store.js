import { createState } from '@hookstate/core'

const store = createState({
  tasks: [
    { text: 'Prepare for talk', completed: false },
    { text: 'Fix bug with homepage', completed: false },
    { text: 'Attend team meeting', completed: false },
    { text: 'Move video files to external drive', completed: false },
    { text: 'Record YouTube video', completed: true },
    { text: 'Wrap up article', completed: true }
  ]
})

export default store
