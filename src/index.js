import { renderForm } from "./ui/renderForm";

renderForm(onSubmit);

function onSubmit(alg) {
    console.log(alg + ":");
    if(alg == "fib") {
        console.log("-------is fib");
    } else if(alg =="merge") {
        console.log("-------is merge");
    } else console.log("Invalid selection");

}