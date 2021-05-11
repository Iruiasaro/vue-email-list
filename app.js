/*Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = new Vue({
    el: '#app',
    data: {
        mailList: [],
        mailTimes: 10,
    },
    methods: {

    },
    mounted() {
        for (var i = 0; i < this.mailTimes; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((email) => {
                    this.mailList.push(email.data.response);
                });
        }
    }
});