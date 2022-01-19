<template>
  <div class="submenu">
    <div>
      <input type="checkbox" id="all" @click="toggleAll" v-model="selected"> <label for="all"> все</label>
    </div>
    <button class="btn">
      Сохранить
      <svgicon name="pdf" height="24" width="24"  />
    </button>
    <button class="btn"> Отправить
      <svgicon name="send" height="24" width="24"   />
    </button>
    <button class="btn"> Удалить
      <svgicon name="bin" height="24" width="24" class="no-fill stroke"  />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  props: ['allSelected'],
  data() {
    return {
      selected: false
    }
  },
  watch: {
    allSelected(oldVal, newVal) {
      if(!!this.allSelected) this.selected = true
      else this.selected = false
    }
  },
  methods: {
    toggleAll() {
      this.$emit('toggleAll')
    }
  }
}
</script>

<style lang="scss">
.submenu {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  div {
    margin-right: 10px;
  }
  svg.no-fill {
    fill: none;
  }
  .btn {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
}
</style>
