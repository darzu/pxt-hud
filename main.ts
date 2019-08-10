/**
* Corgi Platformer Blocks
*/
//% weight=100 color=#d2b48c icon="\uf641"
//% groups='["Create", "Movement", "Speak", "Properties"]'
namespace darzu {
    //% block
    export function showNumber(v: number, interval: number = 150): void
    { }

    //% block
    export function showNumber2(v: number, interval: number = 150): void
    { }

    //% block
    export function showNumber3(v: number, interval: number = 150): void
    { }

}
type HudSize = 5 | 8 | 12;
interface HudItem {
    x: number,
    y: number,
    color: number,
    txt: string,
    size?: HudSize,
}
function renderHudItem(h: HudItem) {
    let font: image.Font;
    if (h.size == 12)
        font = image.font12
    else if (h.size == 5)
        font = image.font5
    else
        font = image.font8

    screen.print(h.txt, h.x, h.y, h.color, font)
}
let hudItems: { [name: string]: HudItem; } = {}
function addHudItem(name: string, item: HudItem): HudItem {
    hudItems[name] = item
    return item
}
function createHudItem(name: string, x: number, y: number, color: number, txt: string | number, size?: HudSize) {
    let txt_ = txt + ""
    let i: HudItem = {
        x: 20, y: 20, color: 10, txt: txt_,
        size: size
    }
    addHudItem(name, i)
    return i
}
game.onShade(function () {
    for (let name of Object.keys(hudItems)) {
        let h = hudItems[name]
        renderHudItem(h)
    }
    screen.fillRect(10, 10, 10, 10, 2)
    screen.print(4 + "", 0, 50, 2, image.font8)
})

let dz1 = createHudItem("dz", 20, 20, 10, "d")

game.onUpdateInterval(1000, function () {
    dz1.txt += "z"
})

darzu.showNumber(0)

//scene.createRenderable

