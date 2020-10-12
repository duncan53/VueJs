<template>
<div id="app" class="m-0 p-0">
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Liste de livres GÉ-NI-AUX</h1>
      <p class="lead">Une super liste de livres que tu peux trier !</p>
    </div>
  </div>

  <div class="container-fluid">
    <div class="card">
      <div class="card-header">Liste des livres</div>
      <div class="card-body">
        <tableau @tri="onClick($event)" :books="books" :order='trier'></tableau>

      </div>
    </div>
  </div>
  <br>
  <div class="container-fluid">
    <formulaire @add-book="onSubmit($event)" :books="books" :item="newBook"></formulaire>
  </div>

</div>


<!-- <formulaire @add-book="onSubmit($event)" :books="books" :item="newBook"></formulaire> -->
</template>

<script>
import tableau from "./components/table.vue"
import formulaire from "./components/form.vue"

export default {
  name: 'App',
  data: function() {
    return {
      newBook: {
        title: null,
        author: null,
        publicationDate: null,
        urlBiography: null,
      },
      trier: 'asc',
      books: [{
          id: 1,
          title: 'Tchoupi à la plage',
          author: 'Michel',
          publicationDate: '2012',
          urlBiography: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        },
        {
          id: 2,
          title: 'Martine apprend à faire du vélo',
          author: 'Patrick',
          publicationDate: '2002',
          urlBiography: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        },
        {
          id: 3,
          title: 'Les supers justiciers',
          author: 'Josianne',
          publicationDate: '2005',
          urlBiography: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        },
        {
          id: 4,
          title: 'Ratus et la maison hantée',
          author: 'Jean',
          publicationDate: '2015',
          urlBiography: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        },
        {
          id: 5,
          title: 'Les 100 meilleurs astuces de grand-mères',
          author: 'Anne',
          publicationDate: '1998',
          urlBiography: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        },
      ]
    }
  },
  methods: {
    onSubmit: function(e) {
      this.books.push(e);
    },
    onClick: function(e) {
      //console.log(e);
      //console.log(this.trier);
      this.trier = e.trier;
    }
  },
  components: {
    tableau,
    formulaire
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
