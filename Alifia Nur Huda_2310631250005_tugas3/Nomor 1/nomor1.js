function generateFibonacci() {
    let n = parseInt(document.getElementById("num").value);
    let fib = [0, 1];
    for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
    document.getElementById("output").innerText = fib.slice(0, n).join(", ");
}
