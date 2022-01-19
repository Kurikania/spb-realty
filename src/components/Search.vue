<template>
  <div class="search">
    <div class="search-bar">
      <input type="text" placeholder="Введите ЖК / корпус / № квартиры / № паркинга" v-model="searchPhrase"
             @input="$emit('search', searchPhrase)">
    </div>
    <div class="search-dropdown">
      <button class="btn-transparent flex flex-align-center" @click="toggleSelect">
        <div class="mr-6">Все статусы</div>
        <svgicon name="ic_up" width="16px" :fill="false" stroke="black" :class="checkboxes? 'svg-up': 'svg-down'" />
      </button>

      <div v-if="checkboxes" class="checkboxes" @mouseleave="checkboxes=false">
        <div>
          <input type="checkbox" class="mr-6" id="reserved" v-model="filters.reserved"> <label for="reserved">Забронировано</label>
        </div>
        <div>
          <input type="checkbox" class="mr-6" id="sold" v-model="filters.sold"> <label for="sold">Продано</label>
        </div>
        <div>
          <input type="checkbox" class="mr-6" id="active" v-model="filters.active"> <label for="active">Активно</label>
        </div>
      </div>

    </div>
    <div class="search-btn">
      <button class="btn flex flex-align-center" @click="$emit('clearBasket')">
        <div>
          Очистить корзину
        </div>
        <svgicon name="x" height="24" class="stroke"/>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  components: {},
  props: ['filters'],
  data() {
    return {
      checkboxes: false,
      searchPhrase: "",
    }
  },
  methods: {
    toggleSelect() {
      this.checkboxes = !this.checkboxes;
    }
  }
}
</script>

<style lang="scss">
.search {
  display: flex;
  padding-bottom: 32px;
  height: 38px;
  width: 100%;
  justify-content: center;

  svg{
    fill: none;
  }

  .checkboxes {
    position: absolute;
    left: 0;
    right: 0;
    top: 42px;
    bottom: 0;
    padding: 5px;
    background-color: white;
    width: 190px;
    height: fit-content;
    z-index: 1;

    div {
      margin-bottom: 14px;
    }
  }

  .btn, .btn-transparent {
    height: 100%;
    margin-right: 10px;
    white-space: nowrap;
    flex: 1;
  }

  &-dropdown {
    position: relative;
  }

  &-bar {
    flex: 2;
    margin-right: 10px;

    input[type=text] {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border: 1px solid #C4C4C4;
      padding: 0 0 0 40px;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
      background-size: 14px;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 16px 48%;
    }
  }
}
</style>
