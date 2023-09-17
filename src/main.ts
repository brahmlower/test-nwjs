console.log("hello world!");

function indexOpen(window: nw.Window): void {
}

nw.Window.open('index.html', {}, indexOpen);
