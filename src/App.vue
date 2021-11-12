<template>
  <div class="container">
    <div class="content">
      <app-new-product></app-new-product>
      <div class="products-block">
        <h1>Product card</h1>
        <app-product-card></app-product-card>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from '@/components/NewProduct'
import ProductCard from '@/components/ProductCard'

export default {
  components: {
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

.content {
  width: 1440px;
  box-sizing: border-box;
  padding: 32px;
  display: flex;
  justify-content: space-between;
}

.products-block {
  width: 1028px;
  background: green;
}
</style>
