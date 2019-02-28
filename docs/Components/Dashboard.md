# Dashboard

User is taken to the appropriate dashboard view.

- If there is no user, send them to login
- if the user is a `member`, render the member view
- if the user is a `leader`, render the leader view
    - if the user has not yet filled the form to request their club, render the request form view.
    - if the user has requested their club, check if it has been accepted, if so, render their leader dashboard, if not, render the waiting for verification view.

## Step 1

[X] - set up requestedClub var on backend to bool val
[X] - set up accepted var on backend to bool val on backend
[X] - set up requestClub action function in Redux


requestClub action function
    [ ] - takes in user object
    [ ] - send user object to /requestClub post route
    [ ] - returns new user object and dispatches that object in the payload to update the user state value in the Redux store.