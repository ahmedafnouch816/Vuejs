const app = Vue.createApp({
    // data, function 
    //template:'<h2> I am the template'
    data(){
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books:[
                { title:'name of the wind' , author:'patrick', img:'assets/1.JPG ' , isFav:true},
                { title:'the pirate bay' , author:'gamild', img:'assets/2.JPG ', isFav:false},
                { title:'the final empire' , author:'gostavo', img:'assets/3.JPG ' , isFav:true}
            ]
          
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        toggleFav(book){
            book.isFav = !book.isFav // si vrai jybli isfav si non jybli is not fav
        }

    },
    computed:{
        filteredBooks(){
        return this.books.filter((book)=> book.isFav)     
    
    }
    }
})

app.mount('#app')