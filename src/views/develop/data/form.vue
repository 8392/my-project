<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-19 15:53:46
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 10:57:02
 -->
<template>
    <div class="page-main">
        <base-form ref="basic" v-model="formParams" :columns="formColumns" label-width="100px" :inline-message="false">
            <template #desc>
                <el-form-item label="活动形式">
                    <el-input v-model="formParams.desc" type="textarea"></el-input>
                </el-form-item>
            </template>
            <el-form-item>
                <base-button type="primary" @click.prevent="onSubmit">
                    立即创建
                </base-button>
                <base-button>取消</base-button>
            </el-form-item>
        </base-form>
    </div>
</template>
<script>
export default {
    name: "DataForm",
    components: {},
    data() {
        return {
            formParams: {
                name: "哈哈哈",
                area: [],
                date: "",
                delivery: 1,
                city: [],
                allday: "",
                fileList: [],
                desc: ""
            },
            formColumns: [
                {
                    type: "base-input",
                    key: "name",
                    label: "活动名称",
                    width: "50%",
                    attr: {
                        placeholder: "请输入活动名称"
                    },
                    rules: { required: true, message: "请输入", trigger: "blur" }
                },
                {
                    type: "base-select",
                    key: "area",
                    label: "活动区域",
                    width: "50%",
                    attr: {
                        placeholder: "请输入活动区域",
                        clearable: true,
                        multiple: true,
                        options: [
                            { id: 1, label: "区域1" },
                            { id: 2, label: "区域2" }
                        ]
                    },
                    rules: { required: true, message: "请输入", trigger: "blur" }
                },
                {
                    type: "base-date-picker",
                    key: "date",
                    label: "活动时间",
                    attr: {
                        type: "date",
                        placeholder: "选择日期",
                        valueFormat: "timestamp"
                    },
                    rules: { required: true, message: "请输入日期", trigger: "blur" }
                },
                {
                    type: "base-switch",
                    key: "delivery",
                    label: "及时配送"
                },
                {
                    type: "base-checkbox",
                    key: "city",
                    label: "活动城市",
                    attr: {
                        options: [
                            {
                                id: 1,
                                label: "北京"
                            },
                            {
                                id: 2,
                                label: "上海"
                            }
                        ]
                    }
                },
                {
                    type: "base-radio",
                    key: "allday",
                    label: "是否全天",
                    attr: {
                        options: [
                            {
                                id: 1,
                                label: "是"
                            },
                            {
                                id: 2,
                                label: "否"
                            }
                        ]
                    }
                },
                {
                    type: "base-upload",
                    key: "fileList",
                    label: "活动图片",
                    attr: {}
                },
                {
                    type: "custom",
                    key: "desc"
                },
                {
                    type: "tinymce",
                    label: "活动介绍",
                    key: "content"
                }
            ]
        };
    },
    created() {
        this.getDetail();
    },
    methods: {
        getDetail() {},
        onSubmit() {
            this.$refs["basic"].validate();
        },
        onSuccess(e, b) {
            console.log(e);
            console.log(b);
        }
    }
};
</script>
<style lang="scss" scoped></style>
