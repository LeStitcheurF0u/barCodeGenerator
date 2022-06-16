function save () {
    html2canvas(document.querySelector('.result')).then(canvas=> {
        var a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = 'result.png';
        a.click();
        a.delete;
    })
}