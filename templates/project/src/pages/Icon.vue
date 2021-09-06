<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-lx-emoji"></i> 自定义图标</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="container">
      <h2>使用方法</h2>
      <p style="line-height: 50px">
        直接通过设置类名为 el-icon-iconName 来使用即可。例如：（共{{
          iconList.length
        }}个图标）
      </p>
      <p class="example-p">
        <i
          class="el-icon-lx-redpacket_fill"
          style="font-size: 30px; color: #ff5900"
        ></i>
        <span
          >&lt;i class=&quot;el-icon-redpacket_fill&quot;&gt;&lt;/i&gt;</span
        >
      </p>
      <p class="example-p">
        <i class="el-icon-lx-weibo" style="font-size: 30px; color: #fd5656"></i>
        <span>&lt;i class=&quot;el-icon-weibo&quot;&gt;&lt;/i&gt;</span>
      </p>
      <p class="example-p">
        <i
          class="el-icon-lx-emojifill"
          style="font-size: 30px; color: #ffc300"
        ></i>
        <span>&lt;i class=&quot;el-icon-emojifill&quot;&gt;&lt;/i&gt;</span>
      </p>
      <br />
      <h2>图标</h2>
      <div class="search-box">
        <el-input
          class="search"
          size="large"
          v-model="keyword"
          clearable
          placeholder="请输入图标名称"
        ></el-input>
      </div>
      <ul>
        <li class="icon-li" v-for="(item, index) in list" :key="index">
          <div @click="copy(item)" class="icon-li-content">
            <i :class="`el-icon-${item}`"></i>
            <span>{{ item }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { CopyClass } from '@/core/common';
export default {
  data: function () {
    return {
      keyword: '',
      iconList: [
        'platform-eleme',
        'eleme',
        'delete-solid',
        'delete',
        's-tools',
        'setting',
        'user-solid',
        'user',
        'phone',
        'phone-outline',
        'more',
        'more-outline',
        'star-on',
        'star-off',
        's-goods',
        'goods',
        'warning',
        'warning-outline',
        'question',
        'info',
        'remove',
        'circle-plus',
        'success',
        'error',
        'zoom-in',
        'zoom-out',
        'remove-outline',
        'circle-plus-outline',
        'circle-check',
        'circle-close',
        's-help',
        'help',
        'minus',
        'plus',
        'check',
        'close',
        'picture',
        'picture-outline',
        'picture-outline-round',
        'upload',
        'upload2',
        'download',
        'camera-solid',
        'camera',
        'video-camera-solid',
        'video-camera',
        'message-solid',
        'bell',
        's-cooperation',
        's-order',
        's-platform',
        's-fold',
        's-unfold',
        's-operation',
        's-promotion',
        's-home',
        's-release',
        's-ticket',
        's-management',
        's-open',
        's-shop',
        's-marketing',
        's-flag',
        's-comment',
        's-finance',
        's-claim',
        's-custom',
        's-opportunity',
        's-data',
        's-check',
        's-grid',
        'menu',
        'share',
        'd-caret',
        'caret-left',
        'caret-right',
        'caret-bottom',
        'caret-top',
        'bottom-left',
        'bottom-right',
        'back',
        'right',
        'bottom',
        'top',
        'top-left',
        'top-right',
        'arrow-left',
        'arrow-right',
        'arrow-down',
        'arrow-up',
        'd-arrow-left',
        'd-arrow-right',
        'video-pause',
        'video-play',
        'refresh',
        'refresh-right',
        'refresh-left',
        'finished',
        'sort',
        'sort-up',
        'sort-down',
        'rank',
        'loading',
        'view',
        'c-scale-to-original',
        'date',
        'edit',
        'edit-outline',
        'folder',
        'folder-opened',
        'folder-add',
        'folder-remove',
        'folder-delete',
        'folder-checked',
        'tickets',
        'document-remove',
        'document-delete',
        'document-copy',
        'document-checked',
        'document',
        'document-add',
        'printer',
        'paperclip',
        'takeaway-box',
        'search',
        'monitor',
        'attract',
        'mobile',
        'scissors',
        'umbrella',
        'headset',
        'brush',
        'mouse',
        'coordinate',
        'magic-stick',
        'reading',
        'data-line',
        'data-board',
        'pie-chart',
        'data-analysis',
        'collection-tag',
        'film',
        'suitcase',
        'suitcase-1',
        'receiving',
        'collection',
        'files',
        'notebook-1',
        'notebook-2',
        'toilet-paper',
        'office-building',
        'school',
        'table-lamp',
        'house',
        'no-smoking',
        'smoking',
        'shopping-cart-full',
        'shopping-cart-1',
        'shopping-cart-2',
        'shopping-bag-1',
        'shopping-bag-2',
        'sold-out',
        'sell',
        'present',
        'box',
        'bank-card',
        'money',
        'coin',
        'wallet',
        'discount',
        'price-tag',
        'news',
        'guide',
        'male',
        'female',
        'thumb',
        'cpu',
        'link',
        'connection',
        'open',
        'turn-off',
        'set-up',
        'chat-round',
        'chat-line-round',
        'chat-square',
        'chat-dot-round',
        'chat-dot-square',
        'chat-line-square',
        'message',
        'postcard',
        'position',
        'turn-off-microphone',
        'microphone',
        'close-notification',
        'bangzhu',
        'time',
        'odometer',
        'crop',
        'aim',
        'switch-button',
        'full-screen',
        'copy-document',
        'mic',
        'stopwatch',
        'medal-1',
        'medal',
        'trophy',
        'trophy-1',
        'first-aid-kit',
        'discover',
        'place',
        'location',
        'location-outline',
        'location-information',
        'add-location',
        'delete-location',
        'map-location',
        'alarm-clock',
        'timer',
        'watch-1',
        'watch',
        'lock',
        'unlock',
        'key',
        'service',
        'mobile-phone',
        'bicycle',
        'truck',
        'ship',
        'basketball',
        'football',
        'soccer',
        'baseball',
        'wind-power',
        'light-rain',
        'lightning',
        'heavy-rain',
        'sunrise',
        'sunrise-1',
        'sunset',
        'sunny',
        'cloudy',
        'partly-cloudy',
        'cloudy-and-sunny',
        'moon',
        'moon-night',
        'dish',
        'dish-1',
        'food',
        'chicken',
        'fork-spoon',
        'knife-fork',
        'burger',
        'tableware',
        'sugar',
        'dessert',
        'ice-cream',
        'hot-water',
        'water-cup',
        'coffee-cup',
        'cold-drink',
        'goblet',
        'goblet-full',
        'goblet-square',
        'goblet-square-full',
        'refrigerator',
        'grape',
        'watermelon',
        'cherry',
        'apple',
        'pear',
        'orange',
        'coffee',
        'ice-tea',
        'ice-drink',
        'milk-tea',
        'potato-strips',
        'lollipop',
        'ice-cream-square',
        'ice-cream-round',
      ],
    };
  },
  computed: {
    list() {
      return this.iconList.filter((item) => {
        return item.indexOf(this.keyword) !== -1;
      });
    },
  },
  methods: {
    copy(item) {
      CopyClass.strCopy(`el-icon-${item}`).then(() => {
        this.$message.success('复制成功');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.example-p {
  height: 45px;
  display: flex;
  align-items: center;
}
.search-box {
  text-align: center;
  margin-top: 10px;
}
.search {
  width: 300px;
}
ul,
li {
  list-style: none;
}
.icon-li {
  display: inline-block;
  padding: 10px;
  width: 120px;
  height: 120px;
}
.icon-li-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon-li-content i {
  font-size: 36px;
  color: #606266;
}
.icon-li-content span {
  margin-top: 10px;
  color: #787878;
}
</style>
