var app = new Vue({
    el: '#app',
    data: {
        emailList: []
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    //console.log(response.data.response);
                    let email = response.data.response;
                    this.emailList.push(email);
                })
        }
    }
})

