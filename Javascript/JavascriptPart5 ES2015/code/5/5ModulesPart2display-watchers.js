import { MAX_USERS } from './cosntants';

function displayWatchers(watchers = []) {
    // const MAX_USERS = 3;
    if (watchers.length > MAX_USERS) {
        console.log("watchers length is greater than max users")
    }
}
export { displayWatchers }