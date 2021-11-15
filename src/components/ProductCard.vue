<template>
  <div class="product-container" @mouseenter="show = true" @mouseleave="show = false">
    <div class="product-card-container">
      <div class="product-image">
        <img :src="newProduct.imageSrc" :alt="newProduct.title">
      </div>
      <div class="product-info">
        <div class="product-info-title-description">
          <span class="product-title">{{ newProduct.title }}</span>
          <span class="product-description"><p>{{ newProduct.description }}</p></span>
<!--          добавить ограничение по символам-->
        </div>
        <span class="product-price">{{ priceFilter }}</span>
      </div>
    </div>
    <div
      class="product-delete"
      v-if="show"
      @click="deleteProduct()"
    >
      <img src="../../src/style/icons/delete.svg" alt="delete product">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: ['newProduct'],
  computed: {
    priceFilter () {
      const num = '' + this.newProduct.price
      return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб.'
    }
  },
  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.newProduct)
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
  transition: .3s ease-out;
  /* product image styles */
  .product-image img, .product-image {
    width: 332px;
    height: 200px;
    border-radius: 4px 4px 0 0;
  }
  .product-image {
    background-color: $background-forms-color;
    overflow: hidden;
    img {
      transition: .3s ease-out;
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
      p {
        margin: 0;
        -webkit-line-clamp: 5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
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

.product-card-container:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.17), 0 5px 10px rgba(0, 0, 0, 0.08);
  img {
    transform: scale(1.1);
  }
}

/* for position of delete button */
.product-container {
  position: relative;
  cursor: pointer;
  margin-right: 16px;
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
  transition: .2s ease-out;
  user-select: none;
  img {
    height: 16px;
    width: 13px;
    color: $active-button-text-color;
  }
}

.product-delete:hover {
  filter: brightness(120%);
}

.product-delete:active {
  filter: contrast(80%) brightness(80%);
}

/* Adaptive styles */
@media screen and (max-width: 1199px) {
  .product-card-container {
    width: 280px;
    height: 350px;
    .product-image img, .product-image {
      width: 280px;
      height: 170px;
    }
  }

  .product-info {
    max-height: 180px;
    padding: 10px 16px 20px!important;
    .product-info-title-description {
      height: 115px!important;
      margin-bottom: 10px!important;
      p {
        -webkit-line-clamp: 4!important;
      }
    }
    .product-title {
      margin-bottom: 10px!important;
    }
  }

  .product-delete {
    left: 259px;
  }
}

@media screen and (max-width: 1023px) {
  .product-container {
    margin-right: 0;
  }

  .product-card-container {
    width: 332px;
    height: 423px;
    .product-image img, .product-image {
      width: 332px;
      height: 200px;
    }
  }

  .product-info {
    max-height: 223px;
    padding: 16px 16px 24px!important;
    .product-info-title-description {
      height: 137px!important;
      margin-bottom: 16px!important;
      p {
        -webkit-line-clamp: 5!important;
      }
    }
    .product-title {
      margin-bottom: 16px!important;
    }
  }

  .product-delete {
    left: 308px;
  }
}

@media screen and (max-width: 419px) {
  .product-card-container {
    width: 300px;
    height: 350px;
    .product-image img, .product-image {
      width: 300px;
      height: 170px;
    }
  }

  .product-info {
    height: 180px;
    padding: 12px 12px 20px!important;
    .product-info-title-description {
      height: 100px!important;
      margin-bottom: 12px!important;
      p {
        -webkit-line-clamp: 4!important;
      }
    }
    .product-title {
      margin-bottom: 8px!important;
    }
    .product-description {
      margin-bottom: 8px;
    }
  }

  .product-delete {
    left: 278px;
  }
}
</style>
