class Formulario {
    constructor({id,idErrorsContainer}){
        this.form = document.getElementById(id) ?? null
        this.errorContainer = document.getElementById(idErrorsContainer) ?? null
        this.fields = [];
        this.buttons = [];
        this.setFields();
        this.setButtons();
    }

    setFields(){
        this.fields = [
            ...document.getElementsByTagName('input'),
            ...document.getElementsByTagName('text-area'),
            ...document.getElementsByTagName('select')
        ]
    }

    addField({id}){
        const newField = document.getElementById(id);
        const tagsAccepted = [
            'input', 'text-area', 'select'
        ];
        if(tagsAccepted.indexOf(newField.tagName) == -1) return;
        this.addField.push(newField);
    }

    removeField({id}){
        this.fields = this.fields.filter( field => field.id !== id )
    }

    getFields(){
        return this.fields.reduce(  (acc, curr) => {
            acc[curr.name] = curr;
            return acc;
        }, {})
    }

    getValues(){
        return this.fields.reduce(  (acc, curr) => {
            acc[curr.name] = curr.value;
            return acc;
        }, {})
    }

    setButtons(){
        this.buttons = [
            ...document.getElementsByTagName('a'),
            ...document.getElementsByTagName('button')
        ]
    }

    displayErrorMessages({messages}){
        this.errorContainer.innerHTML = '';
        messages.forEach( (error, index) => {
            this.errorContainer.innerHTML+= error
            if(index < messages.length) this.errorContainer.innerHTML+= "<br>"
        });
    }
}