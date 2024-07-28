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
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => (
                this.emails.push(result.data.response)
            ));
        }
    }
}).mount('#app');