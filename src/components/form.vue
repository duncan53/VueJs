<template>
<div>
  <div>
    <b-modal id="modal-1" title="BootstrapVue">
      <div class="card" style="width: 20rem;">
        <div class="card-header">
          Ajouter un livre
        </div>
        <div class="card-body">
          <form class="form" @submit.prevent="checkForm()" method="post">
            <div class="form-group">
              <input class="form-control" v-model="item.title" placeholder="Titre du livre">
            </div>

            <div class="form-group">
              <input class="form-control" v-model="item.author" placeholder="Nom de l'auteur">
            </div>

            <div class="form-group">
              <input type="date" value1="2020-01-01" value2="2011-08-19" class="form-control" v-model="item.publicationDate" placeholder="Date de publication">
            </div>

            <div class="form-group">
              <input class="form-control" v-model="item.urlBiography" placeholder="Url">
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Ajouter le livre" />
            </div>
          </form>

        </div>

      </div>
    </b-modal>
  </div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>
</div>
</template>

<script>
import {
  BModal,
  BButton,
  VBModal
} from "bootstrap-vue";
export default {
  props: ['books', 'item'],
  methods: {
    checkForm: function() {

      this.item.id = this.books.length + 1;
      this.$emit('add-book', {
        title: this.item.title,
        author: this.item.author,
        publicationDate: this.item.publicationDate,
        urlBiography: this.item.urlBiography,
      })
      this.clearNewBook();
      return true;
    },
    clearNewBook: function() {
      this.item.title = null;
      this.item.author = null;
      this.item.publicationDate = null;
      this.item.urlBiography = null;
    },
  },
  components: {
    BModal,
    BButton
  },
  directives: {
    'b-modal': VBModal
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
