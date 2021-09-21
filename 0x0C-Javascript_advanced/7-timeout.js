console.log("Start of the execution queue");
setTimeout(function () {
    console.log("Final code block to be executed")
}, 0);
for (let itr = 0; itr < 100; itr++) {
    console.log(itr + 1)
}
console.log("End of the loop printing")
