<!-- Dashboard.md docs -->

# Dashboard

User is taken to the appropriate dashboard view.

- If there is no user, send them to login
- if the user is a `member`, render the member view
- if the user is a `leader`, render the leader view go to ## Leader section.
- if the user is a `admin` go to  ## Admin section.

## Step 1

[X] - set up requestedClub var on backend to bool val
[X] - set up accepted var on backend to bool val on backend
[X] - set up requestClub action function in Redux


requestClub action function
    [X] - takes in user object
    [X] - send user object to /requestClub post route
    [X] - returns new user object and dispatches that object in the payload to update the user state value in the Redux store.


## Admin

- [X] If the `user.type` is `admin` then they hit the admin dashboard function.

- [X] Here they can select to view all clubs.
View all clubs that are requesting to join.
View all club leaders and what clubs they own.
View all members.

## Leader

[X] - if the user has not yet filled the form to request their club (requested: false), render the request form view.
[X] - if the user has requested their club (`requested: true`), check if it has been accepted (`accepted: true`), if so, render their leader dashboard, if not, (`accepted: false`)render the waiting for verification view.

### Accepted Dashboard View

Club Leader can view their club details and add a basic Event.

To view their club info (we currently store the User object with the club id in their clubs array).

Soo.. this means... on componentDidMount Lifecycle Method, we'll want to check if the user is an accepted leader, then use that club id to call an action function (getClubLeaderClub) to hit a route on the backend that will take that id, find the club and return its object into our state that we can then have the user interact with.
