function test() {
    const element = document.createElement('span');
    element.innerHTML = _.join(['hello', 'world'], '-');
    return element;
}