for (let x = 0; x < 10; x++) {
    for (let i = 0; i <= x; i++) {
        document.write('*');
        console.log(i + 'dentro');
    }
    document.write('<br />');
    console.log(x + 'fora');
}
