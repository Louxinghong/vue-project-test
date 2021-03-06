<template>
  <div class="page-search" :class="{'show': show}">
    <svg-icon class="search" icon-class="search" @click.native.stop="handleClick"></svg-icon>
    <el-select
      ref="select"
      class="search-select"
      placeholder="请输入"
      v-model="search"
      :remote-method="querySearch"
      @change="handleChange"
      remote
      filterable
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
import path from 'path'

export default {
  name: 'Search',
  data() {
    return {
      show: false,
      search: '',
      searchPool: '',
      options: [],
      fuse: undefined
    }
  },
  computed: {
    routers() {
      return this.$store.state.status.routes
    }
  },
  watch: {
    show: {
      handler: function(val) {
        val
          ? document.body.addEventListener('click', this.handleClose)
          : document.body.removeEventListener('click', this.handleClose)
      }
    },
    searchPool: {
      handler: function(val) {
        this.initFuse(val)
      }
    }
  },
  mounted() {
    this.searchPool = this.generateRoutes(this.routers)
  },
  methods: {
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: 'title',
            weight: 0.7
          },
          {
            name: 'path',
            weight: 0.3
          }
        ]
      })
    },
    generateRoutes(routers, basePath = '/', prefixTitle = []) {
      let res = []

      for (const router of routers) {
        if (router.hidden) {
          continue
        }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        }

        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title]

          if (router.redirect !== 'noredirect') {
            res.push(data)
          }
        }

        if (router.children && router.children.length) {
          const temp = this.generateRoutes(
            router.children,
            data.path,
            data.title
          )

          if (temp.length >= 1) {
            res = [...res, ...temp]
          }
        }
      }
      return res
    },
    handleClick() {
      this.show = !this.show

      if (this.show) {
        this.$refs.select && this.$refs.select.focus()
      }
    },
    handleClose() {
      this.$refs.select && this.$refs.select.blur()
      this.options = []
      this.show = false
    },
    querySearch(query) {
      this.options = query !== '' ? this.fuse.search(query) : []
    },
    handleChange(val) {
      this.$router.push(val.path)
      this.search = ''
      this.options = []
      this.$nextTick(() => {
        this.show = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-search {
  display: inline-block;
  font-size: 17px;
  margin-right: 15px;

  .search {
    cursor: pointer;
  }

  .search-select {
    display: inline-block;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    font-size: 18px;
    vertical-align: middle;
    transition: width 0.2s;

    /deep/ .el-input__inner {
      height: 25px;
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
    }
  }

  &.show {
    .search-select {
      width: 200px;
      margin-left: 10px;
    }
  }
}
</style>