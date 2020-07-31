<template>
    <ul>
        <li
            v-for="(item, index) in data"
            :key="index"
            class="tree-li"
            :class="{
                'scope': item.children,
                'active': showChildren[index]
            }"
        >
            <span @click="handleClick(index)">{{item.name}}</span>
            <tree :data="item.children" v-show="showChildren[index]" v-if="alreadyShow[index]"></tree>
        </li>
    </ul>
</template>
<script>
export default {
    name: "tree",
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            showChildren: [],
            alreadyShow: []
        };
    },
    methods: {
        handleClick(index) {
            console.log("data", this.showChildren);

            const show = !this.showChildren[index];
            // this.showChildren.splice(index, 1, show); // 改变数组内的值触发视图的改变
            this.$set(this.showChildren, index, show);
            // this.alreadyShow.splice(index, 1, true);
            this.$set(this.alreadyShow, index, true);
        }
    }
};
</script>

<style lang="scss" scoped>
.list {
    padding-left: 35px;
    cursor: pointer;
}
* {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.tree-li {
    font-size: 14px;
    margin-left: 30px;
    cursor: pointer;
}
.scope::before {
    /* 伪类添加图标 */
    display: inline-block;
    content: "\e6bd";
    font-family: "iconfont";
}
.active::before {
    /* 不同状态图标的改变 */
    transform: rotateZ(-90deg);
}
</style>