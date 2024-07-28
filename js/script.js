const { createApp} = Vue;

createApp({
    data() {
        return {
            emails: null
        }
    },
    methods: {
        getRandomEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        }
    }
}).mount('#app');