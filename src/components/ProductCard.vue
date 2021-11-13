<template>
  <div class="product-container" @mouseenter="show = true" @mouseleave="show = false">
    <div class="product-card-container">
      <div class="product-image">
        <img :src="product.imageSrc" :alt="product.title">
      </div>
      <div class="product-info">
        <div class="product-info-title-description">
          <span class="product-title">{{ product.title }}</span>
          <span class="product-description">{{ product.description }}</span>
        </div>
        <span class="product-price">{{ product.price }}</span>
      </div>
    </div>
    <div class="product-delete" v-if="show">
      <img src="../../src/style/icons/delete.svg" alt="delete product">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      product: {
        id: '',
        imageSrc: 'https://samolet.ru/media/CACHE/images/project/card_image/001/a445e8a91c5fa5dcdfb798e658a04352.jpg',
        title: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10 000 руб.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

/* Basic layout product card */
.product-card-container {
  width: 332px;
  height: 423px;
  background: $background-forms-color;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  /* product image styles */
  .product-image img, .product-image {
    width: 332px;
    height: 200px;
    border-radius: 4px 4px 0 0;
  }
  .product-image {
    background-color: $background-forms-color;
    img {
      object-fit: cover;
    }
  }
  /* product text styles */
  .product-info {
    max-height: 223px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 24px;
    .product-info-title-description {
      height: 137px;
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .product-title, .product-description, .product-price {
       font-family: $main-font;
       color: $main-text-color;
       font-style: normal;
     }
    .product-title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 16px;
    }
    .product-description {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
    }
    .product-price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
}

/* for position of delete button */
.product-container {
  position: relative;
  cursor: pointer;
}

/* delete button */
.product-delete {
  width: 32px;
  height: 32px;
  z-index: 10;
  background: $error-color;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  left: 308px;
  img {
    height: 16px;
    width: 13px;
    color: $active-button-text-color;
  }
}
</style>
