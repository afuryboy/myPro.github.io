<template>
    <div class="pro-box">
        <div class="pro-item" v-for="pro in pros">
            <div class="pro-title">{{ pro.projectName }}</div>
            <div class="pro-desc">{{ pro.desc }}</div>
            <div class="pro-content">
                <div class="pro-content-item" v-for="item in pro.images">
                    <img :src="'project/'+id+'/'+item.url" alt="" :width="item.width">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const route = useRoute()
const id = computed(() => {
    return route.query.id
})
const projectMap = {
    1: [
        {
            projectName: '场景编辑器',
            desc: '场景编辑器的项目背景是为了解决服务机器人现有平台中任务管理编辑任务模式单一固定等缺点，无法充分利用机器人功能，因此才有了场景编辑器这一低代码任务平台。',
            images: [
                {
                    url: '1-1.png',
                    width: 600,
                    desc: ''
                }
            ]
        },
        {
            projectName: '动作编辑器',
            desc: '动作编辑器的项目背景是为机器人头部面部底部的动作做一个时间轴的配置，可预览。',
            images: [
                {
                    url: '2-2.png',
                    width: 600,
                    desc: ''
                }
            ]
        },
        {
            projectName: '算法平台',
            desc: '演示机器人算法识别能力',
            images: [
                {
                    url: '6-1.png',
                    width: 600,
                    desc: ''
                },
                {
                    url: '6-2.png',
                    width: 600,
                    desc: ''
                }
            ]
        },
        {
            projectName: '机器人统一平台',
            desc: '抽离各个类型机器人公共部分',
            images: [
                {
                    url: '3-1.png',
                    width: 800,
                    desc: ''
                },
                {
                    url: '3-2.png',
                    width: 800,
                    desc: ''
                },
                {
                    url: '3-3.png',
                    width: 800,
                    desc: ''
                },
                {
                    url: '3-4.png',
                    width: 800,
                    desc: ''
                }
            ]
        },
        {
            projectName: '服务机器人平台',
            desc: '服务机器人专属平台',
            images: [
                {
                    url: '4-1.png',
                    width: 800,
                    desc: ''
                }
            ]
        },
        {
            projectName: '配送机器人平台',
            desc: '配送机器人专属平台',
            images: [
                {
                    url: '5-1.png',
                    width: 800,
                    desc: ''
                }
            ]
        }
    ]
}
const pros = computed(() => {
    return projectMap[id.value]
})
</script>
<style scoped lang="scss">
.pro-box {
    background: #000;
    // height: 100%;
    padding: 20px;
    .pro-item {
        color: #fff;
        margin-bottom: 80px;
        .pro-title {
            font-weight: bold;
        }
        .pro-desc {
            font-size: 12px;
            color: #ccc;
            text-indent: 2em;
            padding: 10px;
        }
    }
}
</style>