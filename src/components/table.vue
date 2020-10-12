<template>
  <div>
    <table class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Date de publication</th>
            <th scope="col">Lien</th>
            <th scope="col">Supprimer</th>
        </tr>
    </thead>
    <tbody>
        <ligne :key="item.title" v-for="item in sort" :item="item" :books="books"></ligne>
    </tbody>
  </table>
  <button type="button" class="btn btn-primary" @click="toggle()">Trier</button>
  </div>
</template>

<script>
import ligne from "./ligne.vue"
export default {
  props: ["books", "order"],

  computed: {
      sort : function(){
        return this.orderBy();
      }
  },
  methods: {
      toggle: function () {
          if (this.order == 'asc') {
              // this.trier = 'desc';
              this.$emit("tri", {
                  trier: 'desc',
              });
          } else if (this.order == 'desc') {
              //console.log('ok')
              // this.trier = 'asc';
              this.$emit("tri", {
                  trier: 'asc',
              });
          }
          return true;
      },
      orderBy: function () {
          if (this.order == 'asc') {
              return this.books.sort(function (a, b) {
                  return a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
              });
          } else if (this.order == 'desc') {
              return this.books.sort(function (a, b) {
                  return a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1;
              });
          }
      },
  },
  components: {
    ligne,
  }
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
