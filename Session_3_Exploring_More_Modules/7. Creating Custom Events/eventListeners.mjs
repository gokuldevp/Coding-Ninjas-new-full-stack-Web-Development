// eventListeners.mjs
import { UserEvents } from './userEvents.mjs'

// Create instance of our event emitter
const userEvent = new UserEvents()

// ------------
// Event Handlers
// ------------

// Database persistence handler
function saveToDatabase() {
  console.log('Saving post to database')
}

// Notification service handler
function sendNotifications() {
  console.log('Sending Notifications')
}

// UI update handler
function updateTimeline() {
  console.log('Updating timeline')
}

// ------------
// Event Registration
// ------------

// Register event handlers for 'postCreated' event
// Note: Execution order will be registration order (save -> notify -> update)
userEvent.addListener('postCreated', saveToDatabase)
userEvent.addListener('postCreated', sendNotifications)
userEvent.addListener('postCreated', updateTimeline)

// ------------
// Trigger Workflow
// ------------
// Initiate the post creation process (will trigger event chain)
userEvent.createPost('This is my first post')