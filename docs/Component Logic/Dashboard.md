<!-- Dashboard.md docs -->

# Dashboard

Idea 💡 Maybe I can make a modular Form Component where you can pass in props of what the form needs to fill out and a function name then the Component dynamically renders with those fields and logic...

*Double check where clubs are being stored in the state. For a member, is it different from a leader? Since a leader has their own clubId and then their own club is stored in*


User is taken to the appropriate dashboard view.

- If there is no user, send them to login
- if the user is a `member`, render the member view go to ## Member section
- if the user is a `leader`, render the leader view go to ## Leader section.
- if the user is a `admin` go to  ## Admin section.

## Member
  ✅  - If the user clubs array is empty, render an empty square that directs theme to the clubs list view

## Leader

✅ - if the user has not yet filled the form to request their club (requested: false), render the request form view.
✅ - if the user has requested their club (`requested: true`), check if it has been accepted (`accepted: true`), if so, render their leader dashboard, if not, (`accepted: false`)render the waiting for verification view.


### Step 1

✅ - set up requestedClub var on backend to bool val
✅ - set up accepted var on backend to bool val on backend
✅ - set up requestClub action function in Redux

requestClub action function
    ✅ - takes in user object
    ✅ - send user object to /requestClub post route
    ✅ - returns new user object and dispatches that object in the payload to update the user state value in the Redux store.

### Accepted Dashboard View

- [ ] Club Leader can view their and click add event to go to add page to see create event form.

✅ To view their club info (we currently store the User object with the club id in their clubs array).

✅ Soo.. this means... on componentDidMount Lifecycle Method, we'll want to check if the user is an accepted leader, then use that club id to call an action function (getClubLeaderClub) to hit a route on the backend that will take that id, find the club and return its object into our state that we can then have the user interact with.




## Admin

- ✅ If the `user.type` is `admin` then they hit the admin dashboard function.

- ✅ Here they can select to view all clubs.
- ✅ View all clubs that are requesting to join.
View all club leaders and what clubs they own.
View all members.
