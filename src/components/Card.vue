<template>
  <div class="card">
    <div class="mr-6">
      <input type="checkbox" v-model="card.selected">
    </div>
    <div class="description">

      <div class="heading">
        <div class="flex flex-align-center">
          <div class="red bold big mr-16">
            {{ card.price | nf }} руб.
          </div>
          <div class="btn-round flex flex-align-center" @mouseover="showToolTip" @mouseleave="tooltip=false">
            <svgicon :name="card.icon" height="14" width="14" class="mr-6 no-fill" :fill="false" original/>
            <span class="small">{{ card.iconDescr }}</span>
            <div v-if="tooltip" class="tooltip"> {{ card.tooltip }}</div>
          </div>
        </div>

        <div>
          {{ card.complex }}, <span class="gray smaller">{{ card.date }} </span>
        </div>

      </div>


      <div class="details flex">
        <div class="border-right ml-16">
          <div> {{ card.number }}</div>
          <div> {{ card.rooms }}</div>
        </div>
        <div>
          <div> {{ card.square }} м<sup>2</sup></div>
          <div> {{ card.floor }}</div>
        </div>
      </div>

      <div class="flex">
        <svgicon class="mr-6 mt-5 icon" name="bubble" height="13" minWidth="13" :fill="true"/>
        <div class="">
          {{ card.address }}
        </div>
      </div>

    </div>

    <div class="description">
      <div class="flag flex flex-align-center" :class="'flag-' + card.statusColor">
        <svgicon name="circle" height="5" width="5" :fill="true" color="card.statusColor"/>
        <span class="flex"> {{ card.status }} </span>
      </div>
      <img :src="card.image">
      <div class="gray small">
        Добавлено {{ card.publicationDate }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['card'],
  data() {
    return {
      tooltip: false
    }
  },
  methods: {
    showToolTip() {
      this.tooltip = true
    }
  }
}
</script>

<style lang="scss">
.card {
  background-color: white;
  display: flex;
  height: 238px;
  width: 489px;
  padding: 21px 25px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid $gray-light;
  position: relative;

  
  .btn-round {
    position: relative;
    cursor: pointer;
  }

  .tooltip {
    bottom: -40px;
    position: absolute;
    display: inline-block;
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    padding: 10px 20px;
    white-space: nowrap;

    z-index: 1;

    &::after {
      content: " ";
      position: absolute;
      bottom: 100%;  /* At the top of the tooltip */
      left: 10%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent rgba(0, 0, 0, 0.6) transparent;
    }
  }

  svg.no-fill {
    fill: none
  }

  .icon {
    min-width: 13px;
  }

  .btn-round {
    padding: 5px 16px;
    border: 2px solid rgba(94, 119, 157, 0.25);
    border-radius: 32px;
  }

  .description {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .flag {
      margin-right: -25px;
      padding: 6px 9px;
      white-space: nowrap;

      svg {
        margin-right: 8px;
      }

      &-red {
        background-color: $red-light;
        fill: $red;
        color: $red;
      }

      &-blue {
        background-color: $blue-light;
        fill: $blue;
        color: $blue;
      }

      &-gray {
        background-color: $gray-light;
        fill: $gray;
        color: $gray;
      }

      &-gray-dark {
        background-color: #CCCCCC;
        fill: $gray;
        color: $gray;
      }
    }

    .border-right {
      padding-right: 20px;
      border-right: 1px solid #C4C4C4;
      margin-right: 20px;
    }
  }

  img {
    justify-self: center;
    align-self: center;
    width: 127px;
    height: 98px
  }
}
</style>
