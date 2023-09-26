function getElement(element,elementClass,elementId){

}

class Element{
    constructor(element, elementClass, elementId){
        this.element = element;
        this.elementClass = elementClass;
        this.elementId = elementId;
    }

    get thisClass() {
        return this.elementClass;
    }

    get thisId() {
        return this.elementId
    }
}

export default Element;