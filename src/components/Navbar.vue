<template>
  <div class="container-navbar">
    <span class="add-product">Добавление товара</span>
    <transition name="filter" mode="out-in">
      <div class="filter-container">
        <div class="filter-block" @click="show = !show" v-if="!show">
          <span class="filter-text">{{ filterNow }}</span>
          <div class="filter-arrow">
            <div></div>
          </div>
        </div>
        <ul class="dropdown-list" v-else>
          <li
            @click="changeFilter"
            v-for="list of filters"
            :key="list.id"
          >
            <span>{{ list }}</span>
            <div class="list-arrow">
              <div></div>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      filters: ['По умолчанию', 'По цене min', 'По цене max', 'По наименованию'],
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

</style>
