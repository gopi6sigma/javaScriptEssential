var globalVar = "global var";
let globalLet = "global .. scoped with let";
const globalConst = "glob constant";

{
    var blockVar = "block var";
    let blockLet = "block let";
    const blockConst = "block const";
}

console.log('gvar', globalVar)
console.log('gconst: ', globalConst)

function show() {
    var funVar = "fun var";
    console.log('inside fun. var: ', funVar);
}
show();