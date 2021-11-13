<template>
  <div class="container-navbar">
    <span class="add-product">Добавление товара</span>
    <transition name="filter" mode="out-in">
      <div class="filter-container">
        <div class="filter-block" @click="show = !show">
          <span class="filter-text">{{ filterNow }}</span>
        </div>
        <div class="dropdown-list-container" v-if="show">
          <ul class="dropdown-list">
            <li
              @click="changeFilter"
              v-for="list of filters"
              :key="list.id"
            >{{ list }}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      filters: ['По умолчанию', 'Всякое', 'Разное', 'Интересное'],
      filterNow: 'По умолчанию'
    }
  },
  methods: {
    changeFilter (evt) {
      this.show = false
      this.filterNow = evt.target.innerText // уточнить можно ли так?
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

/* basic navbar styles */
.container-navbar {
  display: flex;
  box-sizing: border-box;
  padding: 16px 24px 0;
  justify-content: space-between;
}

.filter-container {
  position: relative;
}

/* Adding text styles */
.add-product {
font-family: $main-font;
font-style: normal;
font-weight: 600;
font-size: 28px;
color: $main-text-color;
}

/* filter button styles */
.filter-block {
  width: 121.49px;
  height: 36px;
  background: $background-forms-color;
  box-shadow: 0 2px 5px $box-shadow-color;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* filter button text styles */
  span {
    font-family: $main-font;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: $inner-text-color;
    display: inline-block;
    margin-left: 16px;
    position: relative;
  }
  span:after {
    width: 4.59px;
    height: 4.59px;
    content: "";
    border-right: 1px solid $inner-text-color;
    border-bottom: 1px solid $inner-text-color;
    box-sizing: border-box;
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 83px;
  }
}
.filter-block:hover {
  background: $inner-text-color;
  span {
    color: $main-text-color
  }
  span:after {
    border-right: 1px solid $main-text-color;
    border-bottom: 1px solid $main-text-color;
  }
}

/* dropdown list styles */
.dropdown-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 121.49px;
  box-shadow: 0 2px 5px $box-shadow-color;
  border-radius: 4px;
  padding: 0;
  position: absolute;
  top: -16px;
  li {
    height: 36px;
    font-family: $main-font;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    background: $background-forms-color;
    color: $inner-text-color;
    display: flex;
    align-items: center;
    padding-left: 16px;
    cursor: pointer;
  }
  li:first-child {
    border-radius: 4px 4px 0 0;
    position: relative;
  }
  li:last-child {
    border-radius: 0 0 4px 4px;
  }
  li:hover {
    background: $inner-text-color;
    color: $main-text-color
  }
  li:first-child:after {
    width: 4.59px;
    height: 4.59px;
    content: "";
    border-right: 1px solid $inner-text-color;
    border-bottom: 1px solid $inner-text-color;
    box-sizing: border-box;
    transform: rotate(-135deg);
    position: absolute;
    top: 19px;
    left: 99px;
  }
  li:first-child:hover::after {
    border-right: 1px solid $main-text-color;
    border-bottom: 1px solid $main-text-color;
  }
}

</style>
