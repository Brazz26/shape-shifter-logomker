class Svg {
    constructor() {
        this.textsvg = '';
        this.shapesvg = '';
    }
    render() {
        return `<svg>${this.textsvg}${this.shapesvg}</svg>`
    }
    setText(text, color) {
        this.textsvg = `<text text-anchor='middle' x='100' y='100' fill='${color}'>${text}</text>`
    }
    setShape(shape) {
        this.shapesvg = shape.render()
    }
}



module.exports = Svg