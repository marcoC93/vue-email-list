var root = new Vue({
  el: '#root',
  data: {
    elenco_mail : [],
    },
    methods : {

    },
    mounted() {
        const self = this ;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (function (generated_mail) {
            console.log(generated_mail.data);
            console.log(generated_mail.data.response);

        },


        })

    }


})
