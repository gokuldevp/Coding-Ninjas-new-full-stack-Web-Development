import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Update the progress with the calories burned
    this.progress += exercise.caloriesBurned;
    if (this.progress >= this.goal) {
      // Emit the 'goalReached' event
      this.emit('goalReached');
    }
  }
}

const Solution = () => {
  // Create an instance of FitnessTracker
  const tracker = new FitnessTracker();

  // Define a listener for the 'goalReached' event to send a congratulatory message
  tracker.on('goalReached', () => {
    console.log("Congratulations: Goal Reached");
  });

  // Simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 700 });
};

Solution();

export { FitnessTracker, Solution };
