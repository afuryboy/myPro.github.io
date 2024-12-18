<script setup>
const router = useRouter();
const compony = [
  {
    name: "国汽朴津智能科技（安庆）有限公司",
    icon: "pji.png",
    desc: '朴津智能是一家与众不同的智能移动机器人（AMR）公司，也是一家高科技创业公司。',
    id: 1,
    post: '前端开发工程师',
    time: '2018.10.1-2020.2.2'
  },
  {
    name: "ok币所",
    icon: "ok.png",
    desc: 'OKX全球领先的比特币交易平台',
    id: 2,
    post: '前端开发工程师',
    time: '2018.10.1-2020.2.2'
  },
  {
    name: "商汤科技",
    icon: "shangtang.svg",
    desc: '作为人工智能软件公司，商汤科技以“坚持原创，让AI引领人类进步”为使命，旨在持续引领人工智能前沿研究',
    id: 3,
    post: '前端开发工程师',
    time: '2018.10.1-2020.2.2'
  },
  {
    name: "百度科技",
    icon: "baidu.png",
    desc: '百度以“用科技让复杂的世界更简单”为使命，以“成为最懂用户，并能帮助人们成长的全球顶级高科技公司”为愿景。',
    id: 4,
    post: '前端开发工程师',
    time: '2018.10.1-2020.2.2'
  },
];
const goProject = (item) => {
    router.push({
        path: '/project',
        query: {
            id: item.id
        }
    })
}
</script>

<template>
  <div class="box">
    <div class="desc">项目经历</div>
    <div class="item-box">
      <div class="c-item" v-for="item in compony" @click="goProject(item)">
        <div class="item-icon">
          <img :src="item.icon" alt="" class="c-icon" />
        </div>
        <div class="item-desc">{{ item.desc }}</div>
        <div class="item-post">
            <span>岗位：{{  item.post }}</span>
            <span class="item-post-time">任职时间：{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  background: #000;
  color: #fff;
  padding: 20px;
  .desc {
    font-size: 50px;
    text-align: center;
  }
  .item-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .c-item {
    width: 400px;
    height: 200px;
    border: 1px solid #ccc;
    margin-top: 20px;
    cursor: pointer;
    .item-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      .c-icon {
        width: 200px;
        margin: 10px 0;
      }
    }
    .item-desc {
      padding: 20px;
      font-size: 14px;
      text-align: center;
    }
    .item-post {
        font-size: 12px;
        color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        .item-post-time {
            margin-left: 20px;
        }
    }
  }
  .c-item:nth-child(1) {
    .item-icon {
      .c-icon {
        width: initial;
      }
    }
  }
  .c-item:nth-child(4) {
    .item-icon {
      .c-icon {
        width: 150px;
      }
    }
  }
}

</style>
