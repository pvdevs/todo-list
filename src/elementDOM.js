class Element{
    constructor(elementTag, elementClass, elementId){
        this.elementTag = elementTag;
        this.elementClass = elementClass;
        this.elementId = elementId;

        this.element = document.createElement(`${elementTag}`);
        this.element.classList.add(`${this.elementClass}`);
        if (this.elementId) this.element.setAttribute('id',`${elementId}`);
    }

    get htmlElement() {
        return this.element;
    }
}

export default Element;