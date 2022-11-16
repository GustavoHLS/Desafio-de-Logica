const hourglass = (n) => {
    let counter = 0;
    let answer = '';

    if (n < 20) {
        return answer = 'Por favor digite um número de 20 em diante para melhor visualização.'
    }

    for (let i = 0; i <= n; i++) {
        counter++
        if (i == 0) {
            answer += `${'#'.repeat(n - i)}\r\n`
        } else if (i == 1) {
            answer += `#${'#' + ' '.repeat(n - 4)}##\r\n`
        } else if (i == 2) {
            answer += `# ${'#' + ' '.repeat(n - 4 - i)}# #\r\n`
        } else if (counter % 2 == 0 && counter < n - 3) {
            answer += `#${' '.repeat((counter / 2)) + '#' + ' '.repeat(n - 4 - counter) + '#' + ' '.repeat((counter / 2))}#\r\n`
        }
    };

    for (let i = n; i >= 0; i--) {
        counter--
        if (i == 0) {
            answer += `${'#'.repeat(n - i)}\r\n`
        } else if (i == 1) {
            answer += `${'#'.repeat(n)}\r\n`
        } else if (i == 2) {
            answer += `# ${' '.repeat((i / 2) - 1) + '#'.repeat(n - i - 2)} #\r\n`
        } else if (i % 2 == 0 && i < n - 3) {
            answer += `#${' '.repeat((counter / 2)) + '#'.repeat((n - counter - 2)) + ' '.repeat((counter / 2))}#\r\n`
        }
    };
    return (answer)
}

console.log(hourglass(7))

console.log(hourglass(35))