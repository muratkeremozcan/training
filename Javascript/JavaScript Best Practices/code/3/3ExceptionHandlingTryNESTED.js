// try blocks nested with catch blocks can organize an option sequence

// look up some inner text element by its current id or by its existing inner HTML and then update the inner HTML
// find the inner HTML id, update it , if the id isn't found, search by inner HTML. existing gets used if the id isn't found
function changeInnerHTMLByIdOrExisting(id, update, existing) {
    try {
        var newElement = undefined; // initially set this as undefined, will be used later if we need to make a new element
        document.getElementById(id).innerHTML = update; // if the element is found, update its inner HTML
    } catch (error) { // if an error is caught here TRY SOMETHING ELSE 
        try { // we may know its EXISTING inner HTML instead of the node's ID
            var elements = document.getElementsByTagName('*'); // get all the document elements
            for (var i = 0, x = elements.length; i < x; i++) { // go through the elements 
                if (elements[i].innerHTML === existing) { // search for a matching innerHTML. if we find a match
                    element[i].innerHTML = update; // we change it  and exit
                    id = elements[i].id; // since we don't have the id variable, we'll also record whatever id is at that text element inside the id variable
                    break;
                }
                if (i === x) { // if we reach the end of the list, we found nothing found nothing
                    throw new Error("An existing element was not found."); // in addition to native JS errors, we can create custom Errors with custom message properties. We'll use this message in our nested catch
                }
            }
        } catch (error2) { // NESTED CATCH BLOCK
            alert(error2.message + "\nCreating new text node."); // alert the message associated with error2    
            newElement = document.createTextNode(update); // if no element was found with that id or existing innerHTML, we'll make a new text node for use somewhere outside the function
        }
    } finally { // then finally if we made a new text node, we'll log that event out and return the new node for use
        if (newElement !== undefined) { // we check if the newElement is no longer undefined
            console.log("Returning new" + "text node...");
            return newElement;
        } else { // if newElement was undefined, we did not create one because it already existed  
            console.log("Modified element \"" + (id || existing) + "\" with inner HTML \"" + update + "\"."); // notify ourselves that the request element was updated
        } // log out the id or the existingHTML we found the element with 
    }
}

changeInnerHTMLByIdOrExisting("age", "Age: 35", "Age: 34");