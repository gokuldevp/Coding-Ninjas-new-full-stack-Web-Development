// userEvents.mjs
import * as Events from 'events'

// Custom event emitter class for user-related operations
export class UserEvents extends Events.EventEmitter {
  // Method to simulate post creation and emit event
  createPost(content) {
    console.log("Post is created");
    // Emit 'postCreated' event to notify listeners
    this.emit('postCreated')  
  }
}