<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12 col-md-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Búsqueda de Productos" aria-label="Búsqueda de Productos" aria-describedby="basic-addon2" 
              v-model="inputSearch"
              >
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click.prevent="searchProducts"><i class="fa fa-search"></i> Buscar</button>
              <button class="btn btn-outline-secondary btn-danger" type="button" @click.prevent="cleanSearch"><i class="fa fa-trash"></i> Limpiar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">

        <div class="col-xl-3 col-md-6" v-for="producto in productList" :key="producto.id">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-album-2 text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">{{producto.nombre}}</p>
              <h4 class="card-title">{{producto.precio_venta}}</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-tags"></i>{{producto.categorias_read}}
            </div>
          </stats-card>
        </div>

      </div>
      
    </div>
  </div>
</template>
<script>
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import ProductoService from 'src/services/producto.service';

  export default {
    components: {
      StatsCard
    },
    data () {
      return {
        loading: false,
        inputSearch: '',
        productList: []
      }
    },
    methods: {
      cleanSearch () {
        this.inputSearch='';
        this.productList = [];
        // this.$refs.inputSearch.focus();
      },
      searchProducts() {
        this.loading = true;
        this.$validator.validateAll().then(isValid => {
          if (!isValid) {
            this.loading = false;
            return;
          }

          ProductoService.list().then(
            response => {
              this.productList = response.data.body;
            },
            error => {
              this.content =
                (error.response && error.response.data && error.response.data.body) ||
                error.message ||
                error.toString();
            }
          );
          
        });
      }
    }
  }
</script>
<style>

</style>
