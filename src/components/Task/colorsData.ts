export interface IColor {
    principal: string;
    light: string;
    secondaries: string[];
}

function makeColors(r: number, g: number, b: number) {
    let colors: IColor = {
        principal: `rgb(${r}, ${g}, ${b})`,
        light: `rgb(${r + 20}, ${g + 20}, ${b + 20})`,
        secondaries:[]
    }
    for (let i = 0; i < 6; i++) {
        colors.secondaries.push(`rgb(${r - (20 * i)}, ${g - (20 * i)}, ${b - (20 * i)})`);
    }

    return colors;
}

export function getColors() {
    const colors:IColor[] = [];
    colors.push(makeColors(170, 230, 170));
    colors.push(makeColors(200, 250, 250));
    colors.push(makeColors(170, 170, 230));
    colors.push(makeColors(240, 240, 170));
    colors.push(makeColors(190, 250, 250));

    return colors;
}
