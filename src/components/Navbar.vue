<template>
  <div class="container-navbar">
    <span class="add-product">Добавление товара</span>
    <div class="filter-container">
      <div class="filter-block" @click="show = true" v-if="!show">
        <span class="filter-text">{{ filterNow }}</span>
        <div class="filter-arrow">
          <div></div>
        </div>
      </div>
      <ul class="dropdown-list" v-click-outside="hide" v-else>
        <li
          v-for="list of filters"
          :key="list.id"
          @click="sortProducts(list)"
        >
          <span>{{ list.title }}</span>
          <div class="list-arrow">
            <div></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data () {
    return {
      show: false,
      filters: [
        { name: 'default', title: 'По умолчанию' },
        { name: 'min', title: 'По цене min' },
        { name: 'max', title: 'По цене max' },
        { name: 'name', title: 'По наименованию' }
      ],
      filterNow: 'По умолчанию'
    }
  },

  methods: {
    sortProducts (val) {
      this.show = false
      this.filterNow = val.title

      this.$store.dispatch('sortProducts', val)
    },
    hide () {
      this.show = false
    }
  },

  directives: {
    ClickOutside
  },

  mounted () {
    this.popupItem = this.$el
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
  display: flex;
  align-items: center;
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
  min-width: 121.49px;
  height: 36px;
  background: $background-forms-color;
  box-shadow: 0 2px 5px $box-shadow-color;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
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
    margin-right: 5px;
    position: relative;
  }
  .filter-arrow div{
    transform: rotate(45deg);
  }
}
.filter-block:hover {
  background: $inner-text-color;
  span {
    color: $main-text-color
  }
  .filter-arrow div{
    border-right: 1px solid $main-text-color;
    border-bottom: 1px solid $main-text-color;
  }
}

/* Arrows */
.filter-arrow div, .list-arrow div {
  width: 4.59px;
  height: 4.59px;
  border-right: 1px solid $inner-text-color;
  border-bottom: 1px solid $inner-text-color;
  box-sizing: border-box;
}

.filter-arrow, .list-arrow {
  margin-right: 15.51px;
}

/* dropdown list styles */
.dropdown-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  z-index: 10;
  min-width: 121.49px;
  box-shadow: 0 2px 5px $box-shadow-color;
  border-radius: 4px;
  padding: 0;
  position: absolute;
  top: -16px;
  left: -122px;
  user-select: none;
  li {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    cursor: pointer;
    background: $background-forms-color;
    span {
      font-family: $main-font;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: $inner-text-color;
    }
    .list-arrow {
      position: relative;
      top: 3px;
    }
    .list-arrow div{
      transform: rotate(-135deg);
    }
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
    span {
      color: $main-text-color
    }
    .list-arrow div{
      border-right: 1px solid $main-text-color;
      border-bottom: 1px solid $main-text-color;
    }
  }
}

/* Adaptive styles */
@media screen and (max-width: 767px) {
  .container-navbar {
    padding: 10px 20px 0;
  }

  .add-product {
    font-size: 20px;
  }

  .filter-block {
    min-width: 120px;
    height: 20px;
    span {
      font-size: 10px;
      margin-left: 10px;
      margin-right: 3px;
    }
  }

  .dropdown-list {
    min-width: 120px;
    left: -120px;
    top: -13px;
    li {
      height: 20px;
      padding-left: 10px;
      span {
        font-size: 10px;
      }
    }
  }
}

@media screen and (max-width: 419px) {
  .container-navbar {
    padding: 8px 10px;
    justify-content: flex-end;
    height: 20px;
  }

  .filter-container {
    height: 20px;
  }

  .add-product {
    display: none;
    font-size: 0;
  }

  .dropdown-list {
    top: -16px;
  }
}
</style>
