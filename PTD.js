class PTD {
    constructor() { }
    localCsv(e) {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            console.log('The File APIs are not fully supported in this browser.');
            return;
        }
        const file = e.target.files[0];
        const r = new FileReader();
        r.addEventListener("load", () => {
            console.log(r.result);
        })
        if (file) r.readAsText(file);
    }
}

const ptd = new PTD();