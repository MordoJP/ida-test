<template>
  <div class="container">
    <div class="container-block">
      <AppNavbar />
      <div class="content">
        <AppNewProduct class="new-product-card" />
        <div class="products-block">
          <AppProductCard v-for="product of displayProducts" :key="product.id" :newProduct="product" class="product-card"/>
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
  background-color: rgba(255, 254, 251, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-block {
  width: 1440px;
}

.content {
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.products-block {
  width: 1044px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.new-product-card {
  width: 332px;
}

.product-card {
  width: 332px;
  margin: 0 8px 16px;
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

  .product-card {
    max-width: 280px;
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

  .product-card {
    max-width: 332px;
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

  .new-product-card {
    width: 420px;
    margin-bottom: 16px;
  }
}

@media screen and (max-width: 419px) {
  .container-block {
    min-width: 320px;
  }

  .products-block {
    min-width: 320px;
  }

  .product-card {
    max-width: 300px;
  }

  .new-product-card {
    width: 320px;
  }
}
</style>
