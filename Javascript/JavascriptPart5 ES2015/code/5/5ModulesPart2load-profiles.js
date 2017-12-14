import { MAX_REPLIES, MAX_USERS } from './constants';

function loadProfiles(userNames) {
    // const MAX_USERS = 3;;
    if (userNames.lenght > MAX_USERS) {
        console.log("userNames is greater than max users")
    }
    // const MAX_REPLIES = 3;
}
export { loadProfiles }