import { renderForm } from "./ui/renderForm";
import { renderFib } from "./ui/renderFib";
renderForm(onSubmit);

async function onSubmit(alg) {
    console.log(alg + ":");
    if(alg == "fib") {
        await renderFib();
        console.log("-------is fib");
    } else if(alg =="merge") {
        console.log("-------is merge");
    } else console.log("Invalid selection");

}