<template>
    <tr>
        <cell v-for="(value, name) in filteredCells(row)" :key="name" :value="value" :name="name"></cell>
        <td style="position:relative;" @mouseover="handleOverActionCell" @mouseleave="handleLeaveActionCell">
            <div v-if="isContextVisibility" class="context_menu" @mouseover="isContextVisibility = true" @mouseleave="isContextVisibility = false">
                <a :href="routeShow">Подробнее</a>
                <a :href="routeEdit">Изменить</a>
                <a href="#" @click.prevent="handleDestroy">Удалить</a>
                <span class="left"></span>
            </div>
        </td>
    </tr>
</template>

<script>
import Cell from '@/components/Tables/Cell'
import route from '@/router/route'
import { mapActions } from 'vuex'

export default {
  name: 'HostRow',
  data: () => ({
    isContextVisibility: false
  }),
  computed: {
    routeShow () { return route('dashboard.host.show', [this.row.id]) },
    routeEdit () { return route('dashboard.host.edit', [this.row.id]) }
  },
  props: [
    'row'
  ],
  methods: {
    ...mapActions([
      'DESTROY_HOST_BY_ID',
      'START_CONFIRM_FORM'
    ]),
    handleDestroy () {
      this.START_CONFIRM_FORM(() => { return this.DESTROY_HOST_BY_ID(this.row.id) })
      this.isContextVisibility = false
    },
    handleOverActionCell () {
      this.isContextVisibility = true
    },
    handleLeaveActionCell () {
      this.isContextVisibility = false
    },
    filteredCells (row) {
      return {
        name: row.title,
        host_login: row.host_login,
        host_password: row.host_password,
        ftp_server: row.ftp_server,
        ftp_login: row.ftp_login,
        ftp_password: row.ftp_password,
        comment: row.comment
      }
    },
    setCurrentCellHover (row, column) {
      this.cellHoverIndex = [row, column]
    }
  },
  components: {
    Cell
  }
}
</script>

<style scoped>

</style>
