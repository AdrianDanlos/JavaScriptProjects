function sumAll(arr) {
    let min = Math.min(arr[0], arr[1])
    let max = Math.max(arr[0], arr[1])
    let resultado = 0;

    for (let i = min; i <= max; i++) {
        resultado += i
    }
    return resultado;
}

sumAll([1, 4]);