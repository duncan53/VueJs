<template>
  <tr>
    <td>{{item.title}}</td>
    <td>{{item.author}}</td>
    <td>{{item.publicationDate}}</td>
    <td><span v-html="getUrl(item.urlBiography)"></span></td>
    <td><a @click="removeBook(item.id)" href="#">&#x274C;</a></td>
  </tr>
</template>

<script>
export default {
  props: ["item", "books"],
  methods: {
    getUrl: function(link) {
      return "<a href=" + link + ">Biography</a>"
    },
    removeBook: function(id) {
        this.books.forEach((ele) => {
            if (ele.id === id) {
                this.books.splice(this.books.indexOf(ele), 1);
            }
        })
    },
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
