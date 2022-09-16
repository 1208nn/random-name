let value = `
adsghasdghq131dadqe1
qw1231few34234wetete
qweq12314twr12313131
wr12313131qw2314tdas
qwequiqweasdaduqweie`;
let code = value.split(/[(\r\n)\r\n]+/);
code.forEach((item, index) => {
    if (!item) {
        code.splice(index, 1);
    }
})
code = Array.from(new Set(code));
console.log(code);