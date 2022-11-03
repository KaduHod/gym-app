class RegisterFormulario extends Formulario {
    constructor({id, route, idErrorsContainer}){
        super({id, idErrorsContainer})
        this.route = route;
        this.setEvents();
    }  

    setEvents(){
        this.form.addEventListener('submit', e => e.preventDefault());
        const registrarButton = this.buttons.find(button => button.id === 'registrar')
        registrarButton.addEventListener('click', this.handleRegisterAction)
    }

    validate(){
        const {
            name,
            nickname,
            email,
            cellphone,
            password
        } = this.getValues();

        const errors = {
            name : [],
            nickname : [],
            email : [],
            cellphone : [],
            password : []
        };
        /**
         * Name
         */
        if(name.length < 4){
            errors.name.push('Nome curto demais')
        }
        /**
         * nickname
         */
        if(nickname.length < 4){
            errors.nickname.push('Nick name curto demais')
        }
        /**
         * Email
         */
        if(!email.length) {
            errors.email.push('Email inválido')
        }
        /**
         * cellphone
         */
        if(!cellphone.length){
            errors.cellphone.push('Celular inválido')
        }
        /**
         * Password
         */
        if(password.length < 8 ){
            errors.password.push('Senha inválida')
        }

        return {
            errors, 
            all: [
            ...errors.name,
            ...errors.nickname,
            ...errors.email,
            ...errors.cellphone,
            ...errors.password
        ]};
    }

    handleRegisterAction = async (e) => {
        const validate = this.validate();
        if(validate.all.length > 0) return this.displayErrorMessages({messages:validate.all})
        this.errorContainer.innerHTML = '';
        const res = await this.registerRequest();
    }
    
    async registerRequest() {
        try {
            const req = await fetch(this.route, {
                body: JSON.stringify(this.getValues()),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}