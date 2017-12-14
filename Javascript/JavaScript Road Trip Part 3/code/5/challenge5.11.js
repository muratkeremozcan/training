function Fencepost(x, y, postNum) {
    this.x = x;
    this.y = y;
    this.postNum = postNum;
}
Fencepost.prototype = {
    connectionsTo = [],
    sendRopeTo = function(connectedPost) {
        connectionsTo.push(connectedPost);
    },
    removeRope = function(removeTo) {
        var temp = [];
        for (var i = 0; i < connectionsTo.length; i++) {
            if (connectionsTo[i].postNum != removeTo) {
                temp.push(connectionsTo[i]);
            }
        }
        connectionsTo = temp;
    },
    movePost = function(x, y) {
        x = x;
        y = y;
    }

}