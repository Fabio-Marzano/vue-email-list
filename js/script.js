const { createApp} = Vue;
//CREO L'ARRAY PER INSERIRE LE EMAIL DA GENERARE//
createApp({
    data() {
        return {
            emails: []
        }
    },
    //GENERO L'EMAIL ALL'INTERNO DEL DOM//
    created() {
        this.getRandomEmails();
    },
    methods: {
        //AVVIO CICLO FOR PER GENERARE L'INSERIMENTO DELLE 10 EMAILS RANDOM//
        getRandomEmails() {
            for(let i = 0; i<10; i++) {
                //UTILIZZO L'API DI BOOLEAN PER MOSTRARE LE EMAIL//
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => (
                    //PUSHO L'EMAIL ALL'INTERNO DEL DOM//
                    this.emails.push(result.data.response)
                ));

            }
        }
    }
}).mount('#app');