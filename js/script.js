const { createApp} = Vue;

createApp({
    data() {
        return {
            emails: []
        }
    },
    created() {
        this.getRandomEmails();
    },
    methods: {
        getRandomEmails() {
            for(let i = 0; i<10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => (
                    this.emails.push(result.data.response)
                ));

            }
        }
    }
}).mount('#app');