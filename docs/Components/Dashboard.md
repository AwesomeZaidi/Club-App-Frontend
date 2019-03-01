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


