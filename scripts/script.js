var root = new Vue({
  el: '#root',
  data: {
    // generated_mail : '',
    elenco_mail : [],

    },
    methods : {

    },
    mounted() {
        const self = this ;
        elenco_mail = [] ;
        for (var i = 0; i < 10; i++)   {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (generated_mail) {
                 let generated_mail_1 = generated_mail.data.response ;
                 // console.log(generated_mail.data);
                 console.log(generated_mail_1);
                 // console.log(generated_mail.data.response);
                 // generated_mail.data.response.push(root.data.elenco_mail);
                 self.elenco_mail.push(generated_mail_1);
                 // elenco_mail.push(generated_mail_1);
                 // console.log(elenco_mail);

            })

        }

    }


})
