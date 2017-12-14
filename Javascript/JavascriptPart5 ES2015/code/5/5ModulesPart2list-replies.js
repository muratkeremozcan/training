import { MAX_REPLIES } from './constants';

function listReplies(replies = []) {
    //    const MAX_REPLIES = 3;
    if (replies.length > MAX_REPLIES) {
        console.log("replies length is greater than max replies")
    }
}
export { listReplies }