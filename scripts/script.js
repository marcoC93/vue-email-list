var root = new Vue({
  el: '#root',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    },
    methods : {

    },
    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function () {



        })

    }


})
