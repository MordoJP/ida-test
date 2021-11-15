<template>
  <div class="new-product-container">
    <div class="new-product-form">
      <div class="new-product-inputs">
        <div class="new-product-top">
          <div class="form-group">
            <label for="product-name" class="required-label">Наименование товара</label>
            <input
              type="text"
              id="product-name"
              class="form-control-sm"
              :class="($v.title.$error) ? 'invalid-input' : 'valid-input'"
              placeholder="Введите наименование товара"
              @input="$v.title.$touch()"
              v-model="title"
            >
            <div class="error" v-if="$v.title.$dirty && !$v.title.required">Поле является обязательным</div>
          </div>
          <div class="form-group">
            <span>Описание товара</span>
            <textarea
              class="form-control-big valid-input"
              placeholder="Введите описание товара"
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="new-product-bottom">
          <div class="form-group">
            <label for="product-img" class="required-label">Ссылка на изображение товара</label>
            <input
              type="text"
              id="product-img"
              class="form-control-sm"
              placeholder="Введите ссылку"
              v-model="imageSrc"
              @input="$v.imageSrc.$touch()"
              :class="($v.imageSrc.$error) ? 'invalid-input' : 'valid-input'"
            >
            <div class="error" v-if="$v.imageSrc.$dirty && !$v.imageSrc.required">Поле является обязательным</div>
          </div>
          <div class="form-group">
            <label for="product-price" class="required-label">Цена товара</label>
            <input
              type="number"
              id="product-price"
              class="form-control-sm"
              placeholder="Введите цену"
              v-model.number="price"
              @input="$v.price.$touch()"
              :class="($v.price.$error) ? 'invalid-input' : 'valid-input'"
            >
            <div class="error" v-if="$v.price.$dirty && !$v.price.required">Поле является обязательным</div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="add-product-button"
        @click="createProduct"
        :disabled="!$v.price.required || !$v.imageSrc.required || !$v.title.required"
      >Добавить товар</button>
      <div class="success" v-if="success">Продукт добавлен успешно</div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      title: '',
      description: '',
      imageSrc: '',
      price: null,
      success: false
    }
  },

  validations: {
    title: { required },
    imageSrc: { required },
    price: { required }
  },

  methods: {
    createProduct () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('Form is not required')
      } else {
        const product = {
          title: this.title,
          description: this.description,
          imageSrc: this.imageSrc,
          price: this.price
        }

        this.$store.dispatch('createProduct', product)
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000)

        this.title = ''
        this.description = ''
        this.imageSrc = ''
        this.price = null
        this.$v.$reset()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

/* basic card styles */
.new-product-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;
  position: sticky;
  top: 24px;
}

.new-product-form {
  width: 332px;
  box-sizing: border-box;
  padding: 24px;
  background: $background-forms-color;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

/* forms stylisation */
.new-product-bottom {
  height: 136px;
  margin-bottom: 10px;
}
.form-group {
  label, span {
    display: block;
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    position: relative;
  }
  input, textarea {
    display: block;
    width: 284px;
    box-sizing: border-box;
    background: $background-forms-color;
    box-shadow: 0 2px 5px $box-shadow-color;
    border-radius: 4px;
    padding: 10px 16px 11px;
    font-size: 12px;
    line-height: 15px;
    color: $main-text-color;
  }
  .valid-input {
    border: none;
    margin-bottom: 16px;
  }
  /* text stylisation */
  label, span, input, textarea {
    font-family: $main-font;
    font-style: normal;
    font-weight: normal;
  }
  input::placeholder, textarea::placeholder {
    font-family: $main-font;
    color: $inner-text-color;
  }
  .valid-input:focus, textarea:focus {
    outline: 1px solid $main-text-color;
  }
}

/* indent for the last input field */
.last-fg {
  margin-bottom: 24px;
}

/* price input hide arrows */
.form-control-sm::-webkit-outer-spin-button,
.form-control-sm::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* height for inputs */
.form-control-sm {
  height: 36px;
}

.form-control-big {
  height: 108px;
  resize: none;
}

/* required marker for inputs */
.required-label::after {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  content: " ";
  background-color: $error-color;
  position: absolute;
}

/* buttons stylisation */
.add-product-button {
  width: 284px;
  height: 36px;
  border: none;
  border-radius: 10px;
  font-family: $button-font;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  background: $enabled-button-color;
  color: $active-button-text-color;
  cursor: pointer;
  transition: .2s ease-out;
}

.add-product-button:active {
  filter: contrast(80%) brightness(80%)!important;
}

.add-product-button:hover {
  filter: brightness(115%);
}

.add-product-button:disabled {
  background: $disabled-button-color;
  color: $inner-text-color;
  &:hover {
    filter: none;
  }
}

/* success style */
.success {
  color: $enabled-button-color;
  font-family: $button-font;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  position: absolute;
  top: 419px;
  left: 80px;
  transition: .2s ease-out;
}

/* Validation styles */
.invalid-input {
  border: 1px solid #FF8484;
  position: relative;
  margin-bottom: 4px;
}

.invalid-input:focus {
  outline: none;
}

.error {
  font-family: $main-font;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: $error-color;
  margin-bottom: 2px;
}

/* Adaptive styles */
@media screen and (max-width: 1199px) {
  .new-product-container {
    height: 350px;
  }

  .new-product-form {
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    input, textarea {
      width: 230px;
      border-radius: 3px;
      padding: 8px 12px 9px;
      font-size: 10px;
      line-height: 12px;
    }
    input {
      height: 30px;
    }
    textarea {
      height: 60px;
    }
  }

  .add-product-button {
    width: 230px;
    height: 30px;
    border-radius: 5px;
  }

  .success {
    font-size: 10px;
    top: 360px;
    left: 68px;
  }
}

@media screen and (max-width: 767px) {
  .new-product-container {
    height: 210px;
    position: static;
    top: 24px;
  }

  .new-product-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .new-product-form {
    width: 420px;
    height: 190px;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .new-product-top, .new-product-bottom  {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      width: 100%;
      height: 50px;
    }
  }

  .form-group {
    label, span {
      margin-bottom: 2px;
      font-size: 10px;
    }
    input, textarea {
      width: 190px;
      padding: 6px 8px 7px;
      font-size: 10px;
    }
    .valid-input {
      margin-bottom: 8px;
    }
  }

  .last-fg {
    margin-bottom: 10px;
  }

  .form-control-sm, .form-control-big {
    height: 30px!important;
  }

  .add-product-button {
    display: block;
    width: 100%;
    height: 30px!important;
    border: none;
    font-size: 12px;
    margin-bottom: 6px;
  }

  .success {
    font-size: 8px;
    top: 173px;
    left: 152px;
  }

  .invalid-input {
    margin-bottom: 2px;
  }

  .error {
    font-size: 8px;
    margin-bottom: 1px;
  }
}

@media screen and (max-width: 419px) {
  .new-product-container {
    height: 180px;
  }

  .new-product-form {
    width: 320px;
    height: 170px;
    padding: 5px;
    .new-product-top, .new-product-bottom  {
      width: 310px;
    }
  }

  .form-group {
    input, textarea {
      width: 150px;
    }
  }

  .success {
    top: 193px;
    left: 104px;
  }
}
</style>
