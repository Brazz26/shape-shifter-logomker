class Shape{
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}






class Circle extends Shape {
    render() {
        return `<circle cx='100' cy='100' r='100' fill='${this.color}' />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points='200, 20 250, 190 60, 200' fill='${this.color}' />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x='100' y='100' fill='${this.color}' />`
    }
}





module.exports = {Circle, Triangle, Square}