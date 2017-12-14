var newPageBuild = ["<!DOCTYPE html>", "< html >", " < body > ", "<h1>", "</html>", " </body > ", "</h1>"];

var page = "";
page = newPageBuild.join("\n"); // the join method concatenates each index of the array, "joined" by any string parameter you pass in
// in addition to being faster in tests than many string methods, it also easer to read



// this is a great alternative to  the for loop concatenation
/*
for (var i=0, x=newPageBuild.length; i < x; i++){
    page += newpageBuild[i];
}*/