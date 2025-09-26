import "../styles/form.css";

export function renderForm(onSubmit) {
    const header = document.getElementById("header");
    const form = document.createElement("form");
    form.id = "select-form";

    form.innerHTML = `
        <input type="radio" id="fib" name="alg_select">
        <label for="fib">Fibonacci Sequence</label>
        <input type="radio" id="merge" name="alg_select">
        <label for="merge">Merge Sort</label>
        <button type="submit">Submit</button>
    `;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const algSelected = form.querySelector('input[name="alg_select"]:checked').id;
        onSubmit(algSelected);
    })

    header.appendChild(form);
}
