<template>
  <div class="new-product-container">
    <div class="new-product-form">
      <form>
        <div class="form-group">
          <label for="product-name" class="required-label">Наименование товара</label>
          <input
            type="text"
            id="product-name"
            class="form-control-sm"
            placeholder="Введите наименование товара"
          >
        </div>
      </form>
      <form>
        <div class="form-group">
          <span>Описание товара</span>
          <textarea class="form-control-big" placeholder="Введите описание товара"></textarea>
        </div>
      </form>
      <form>
        <div class="form-group">
          <label for="product-img" class="required-label">Ссылка на изображение товара</label>
          <input
            type="text"
            id="product-img"
            class="form-control-sm"
            placeholder="Введите ссылку"
          >
        </div>
      </form>
      <form>
        <div class="form-group">
          <label for="product-price" class="required-label">Цена товара</label>
          <input
            type="text"
            id="product-price"
            class="form-control-sm"
            placeholder="Введите цену"
          >
        </div>
      </form>
      <button class="add-product-button-disabled">Добавить товар</button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../style/variables";

.new-product-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.new-product-form {
  width: 332px;
  height: 440px;
  box-sizing: border-box;
  padding: 24px;
  background: $background-forms-color;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.form-group {
  margin-bottom: 16px;
  label, span {
    display: block;
    margin-bottom: 4px;
    font-family: $main-font;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    position: relative;
  }
  input, textarea {
    width: 284px;
    border: none;
    box-sizing: border-box;
    background: $background-forms-color;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px 11px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: $main-text-color;
    font-family: $main-font;
  }
  input[type=text]::placeholder, textarea::placeholder {
    font-family: $main-font;
    color: $inner-text-color;
  }
  input:focus, textarea:focus {
    outline: 1px solid $main-text-color;
  }
}

.form-control-sm {
  height: 36px;
}

.form-control-big {
  height: 108px;
  resize: none;
}

.required-label::after {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  content: " ";
  background-color: $error-color;
  position: absolute;
}

.add-product-button-disabled {
  width: 284px;
  height: 36px;
  background: $disabled-button-color;
  border: none;
  margin-top: 8px;
  border-radius: 10px;
  color: $inner-text-color;
  font-family: $button-font;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
}
</style>
