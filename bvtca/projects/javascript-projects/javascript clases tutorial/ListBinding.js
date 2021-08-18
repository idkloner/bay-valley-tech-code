class ListBinding{
    constructor(element){
        this.listElement = element;
        this.textList = [];
    }

    /*makes an <li>text<li> element/tag*/
    static createListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

    update(){
        /* remove all exsisting <li< wlwmwnts/tags */
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        /* fill<ul><ol> tag with <li>*/
        for( const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));


        }
    }

    add (text){
        this.textList.push(text);
        this.update();
    }

    remove (index){
        this.textList.splice(index, 1);
        this.update();
    }
    
}