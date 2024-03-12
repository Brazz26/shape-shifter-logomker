class Shape {
    constructor() {
        this.color = ""
    };
    setColor(color) {
        this.color = color
    };
};





//
class Circle extends Shape {
    render() {
        return `<circle cx='150' cy='150' r='120' fill='${this.color}' />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points='150, 15 250, 200 60, 200' fill='${this.color}' />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x='100' y='100' r='2' fill='${this.color}' />`
    }
}





module.exports = {Circle, Triangle, Square}