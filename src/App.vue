<template>
  <div class="container">
    <div class="container-block">
      <app-navbar></app-navbar>
      <div class="content">
        <app-new-product></app-new-product>
        <div class="products-block">
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
          <app-product-card></app-product-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from '@/components/NewProduct'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/components/Navbar'

export default {
  components: {
    appNavbar: Navbar,
    appNewProduct: NewProduct,
    appProductCard: ProductCard
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
  padding: 16px 24px 0;;
  display: flex;
  justify-content: space-between;
}

.products-block {
  width: 1028px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
