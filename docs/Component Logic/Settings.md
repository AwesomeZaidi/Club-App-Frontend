# Settings

## Get Settings Route
- Undeveloped, right now you just get the user but later we're gonnna wanna change it so you pull the data on each refresh so the user doesn't have to log out to view 'new' data.

## Put Settings Route
 - Component sends the user object and token to the action function,.
 - Action function dispatches a signal containing the userFromState and token (the token is useless right now), then we're returned the updated user object.
 - dispatch the new user object as the payload to update the user object state value.

 