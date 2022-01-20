<template>
  <div id="app">
    <Search @search="search" @clearBasket="clearBasket" :filters="filters"/>
    <SubMenu @toggleAll="toggleAll" :allSelected="allSelected" />
    <div class="flex cards-wrap" v-if="filteredListCards.length>0">
      <Card class="cardList" v-for="(card, index) in filteredListCards" :card="card" :key="card.id"/>
    </div>
    <div v-else class="flex flex-align-center flex-column">
      <div>Поиск не дал результатов</div>
      <button class="btn" @click="clearFilters"> Сбросить фильтры </button>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Search from './components/Search.vue'
import SubMenu from "./components/SubMenu";


export default {
  name: 'App',
  components: {
    SubMenu,
    Card,
    Search
  },
  data() {
    return {
      activeFilters: [],
      filters: {
        reserved: false,
        sold: false,
        active: false
      },
      searchPhrase: "",
      cards: [
        {
          id: 0,
          selected: false,
          active: true,
          price: 7733300,
          address: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
          square: 234.38,
          floor: 7,
          rooms: 1,
          number: "кв. 62",
          image: require('@/assets/image.png'),
          icon: 'floorplan',
          iconDescr: 'Квартира',
          complex: 'Чистое Небо',
          status: 'Уступка от юр. лица',
          statusColor: 'red',
          date: ' корпус 10, III кв. 2022 г.',
          publicationDate: '21/11/2020',
          tooltip: "Квартира"
        },
        {
          id: 1,
          selected: false,
          active: true,
          price: 7733300,
          address: 'Комендантский пр., уч. 1 Каменка',
          square: 234.38,
          floor: 7,
          rooms: 1,
          number: "кв. 62",
          image: require('@/assets/image.png'),
          icon: 'floorplan',
          iconDescr: 'Квартира',
          complex: 'Зеленый квартал на Пулковских высотах',
          status: 'Уступка от физ. лица',
          statusColor: 'blue',
          date: ' корпус 10, III кв. 2022 г.',
          publicationDate: '21/11/2020',
          tooltip: "Квартира"
        },
        {
          id: 2,
          selected: false,
          reserved: true,
          price: 800300,
          address: 'Ленинградская область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
          square: 15 ,
          number: "№ 7-10-2 (ПИБ №68)",
          image: require('@/assets/image.png'),
          icon: 'car',
          iconDescr: 'Паркинг',
          complex: 'Зеленый квартал на Пулковских высотах',
          status: 'Забронировано',
          statusColor: 'gray',
          date: ' корпус 10, III кв. 2022 г.',
          publicationDate: '21/11/2020',
          tooltip: "Подземная встроенно-пристроенная"
        },
        {
          id: 3,
          selected: false,
          sold: true,
          price: 800300,
          address: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
          square: 15,
          number: "№ 7-10-2 (ПИБ №68)",
          image: require('@/assets/image.png'),
          icon: 'car',
          iconDescr: 'Паркинг',
          complex: 'Зеленый квартал на Пулковских высотах',
          status: 'Продано',
          statusColor: 'gray-dark',
          date: ' корпус 10, III кв. 2022 г.',
          publicationDate: '21/11/2020',
          tooltip: "Подземная встроенно-пристроенная"
        }
      ]
    }
  },
  methods: {
    toggleAll() {
      this.cards.map(el => el.selected = !el.selected)
    },
    clearBasket() {
      this.cards.map(el => el.selected = false)
    },
    clearFilters() {
      this.activeFilters = [];
      Object.keys(this.filters).forEach((key) => {
        this.filters[key] = false;
      });
      this.searchPhrase = '';
    },
    search(phrase) {
      this.searchPhrase = phrase
    }
  },
  watch: {
    filters: {
      handler() {
        if(Object.values(this.filters).some(el=> !!el)) {
          const filters = Object.keys(this.filters)
          const active = filters.filter((id) => {
            return this.filters[id]
          })
          this.activeFilters = active
        }
        else {
          this.activeFilters = [];
        }
      },
      deep: true
    }
  },
  computed: {
    filteredListCards: {
      get() {
        let filteredListCards =[]
        if(this.activeFilters.length > 0) {
          this.activeFilters.map(el => {
            this.cards.map(card => {

              if (!!card[el]) filteredListCards.push(card)
            })
          })
        } else {
          filteredListCards = this.cards
        }
        return filteredListCards.filter(card => {
          return card.address.toLowerCase().includes(this.searchPhrase.toLowerCase()) ||
              card.complex.toLowerCase().includes(this.searchPhrase.toLowerCase())  ||
              card.number.toLowerCase().includes(this.searchPhrase.toLowerCase())
        })
      },
    },
    allSelected() {
      if (this.filteredListCards.length > 0) return this.filteredListCards.every(el => !!el.selected);
    }
  }
}
</script>

<style lang="scss">
#app {
  margin: 89px auto;
  max-width: 1000px;
  .cards-wrap{
    flex-wrap: wrap;
  }
  .cardList {
    box-sizing: border-box;
    margin-bottom: 23px;
    &:nth-child(odd) {
      margin-right: 20px;
    }
  }
}

</style>
