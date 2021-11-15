<template>
  <div class="container">
    <div class="container-block">
      <AppNavbar />
      <div class="content">
        <AppNewProduct />
        <div class="products-block">
          <AppProductCard v-for="product of displayProducts" :key="product.id" :newProduct="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AppNavbar: () => import('@/components/Navbar'),
    AppNewProduct: () => import('@/components/NewProduct'),
    AppProductCard: () => import('@/components/ProductCard')
  },

  computed: {
    displayProducts () {
      return this.$store.getters.products
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style/variables";

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-block {
  width: 1440px;
}

.content {
  width: 100%;
  box-sizing: border-box;
  padding: 16px 8px 0;
  display: flex;
  justify-content: space-between;
}

.products-block {
  width: 1044px;
  display: flex;
  flex-wrap: wrap;
}

/* Adaptive styles */
@media screen and (max-width: 1439px) {
  .container-block {
    width: 1200px;
  }

  .products-block {
    width: 804px;
    justify-content: space-between;
  }
}

@media screen and (max-width: 1199px) {
  .container-block {
    width: 1024px;
  }

  .products-block {
    width: 628px;
  }
}

@media screen and (max-width: 1023px) {
  .container-block {
    width: 768px;
  }

  .products-block {
    width: 372px;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 767px) {
  .container-block {
    width: 430px;
  }

  .products-block {
    width: 420px;
  }
  .content {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 419px) {
  .container-block {
    min-width: 320px;
  }

  .products-block {
    min-width: 320px;
  }
}
</style>
