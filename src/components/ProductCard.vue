<template>
  <div class="product-container" @mouseenter="show = true" @mouseleave="show = false">
    <div class="product-card-container">
      <div class="product-image">
        <img :src="newProduct.imageSrc" :alt="newProduct.title">
      </div>
      <div class="product-info">
        <div class="product-info-title-description">
          <h3 class="product-title">{{ newProduct.title }}</h3>
          <span class="product-description"><p>{{ newProduct.description }}</p></span>
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
  width: 100%;
  background: $background-forms-color;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: .3s ease-out;
  /* product image styles */
  .product-image img, .product-image {
    width: 100%;
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 24px;
    .product-info-title-description {
      height: 121px;
      display: flex;
      flex-direction: column;
      margin-bottom: 32px;
      justify-content: space-between;
      p {
        margin: 0;
        -webkit-line-clamp: 4;
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
      margin: 0;
    }
    .product-description {
      display: block;
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
    .product-image img, .product-image {
      height: 170px;
    }
    .product-info {
      padding: 12px 12px 20px;
      .product-info-title-description {
        height: 110px;
        margin-bottom: 10px;
      }
      .product-title {
        margin-bottom: 10px;
      }
    }
  }

  .product-delete {
    left: 259px;
  }
}

@media screen and (max-width: 1023px) {
  .product-card-container {
    .product-image img, .product-image {
      height: 200px;
    }
    .product-info {
      padding: 16px 16px 24px;
      .product-info-title-description {
        height: 121px;
        margin-bottom: 32px;
      }
      .product-title {
        margin-bottom: 16px;
      }
    }
  }

  .product-delete {
    left: 308px;
  }
}

@media screen and (max-width: 419px) {
  .product-card-container {
    .product-image img, .product-image {
      height: 170px;
    }
    .product-info {
      padding: 12px 12px 20px;
      .product-info-title-description {
        height: 110px;
        margin-bottom: 10px;
      }
      .product-title {
        margin-bottom: 10px;
      }
    }
  }

  .product-delete {
    left: 278px;
  }
}
</style>
