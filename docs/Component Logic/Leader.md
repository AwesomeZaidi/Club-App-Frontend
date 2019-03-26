# Leader Logic

## Create Event

✅ - Component view 

✅ - Set up with Redux to hit `createEvent` action function

🚧 - set up Redux `createEvent` act func to axios post the event and return it back

🚧 - handle event creation data via state, we need to know what club we need to add this to
which is the leaderClub so we should pass in the user.leaderClub as well

🚧 - the backend should accept the eventData and and the leaderCLub, find the club, create an event and append it to the list of clubs for that club - it should return back the Club object updated and saved along with the event object. We can save this eventObj in the state or something ???? not sure here.