export class ResponsivityManager {
    static subscribers = [];

    static register(component) {
        if (!this.subscribers.includes(component)) this.subscribers.push(component);
    }

    static unregister(component) {
        const index = this.subscribers.indexOf(component);
        if (index !== -1) this.subscribers.splice(index, 1);
    }

    static resize(width, height) {
        this.subscribers.forEach((comp) => comp.onResize && comp.onResize(width, height));
    }

}
