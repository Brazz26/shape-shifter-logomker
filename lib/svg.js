class Svg {
    constructor() {
        this.textsvg = '';
        this.shapesvg = '';
    }
    render() {
        return `<svg width='300' height='200'>${this.shapesvg}${this.textsvg}</svg>`
    }
    setText(text, color) {
        this.textsvg = `<text text-anchor='middle' x='150' y='150' fill='${color}'>${text}</text>`
    }
    setShape(shape) {
        this.shapesvg = shape.render()
    }
}



module.exports = Svg