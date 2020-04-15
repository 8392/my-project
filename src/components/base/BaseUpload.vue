<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-01-08 10:07:56
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 11:00:13
 -->
<template>
    <el-upload
        class="upload-demo"
        action="http://39.108.153.21:10012/rhpass.caiping/web/api/v1/common/file"
        :show-file-list="true"
        v-bind="$attrs"
        :file-list="formatValue"
        :on-change="onChange"
        :on-success="onSuccess"
        :on-remove="onRemove"
        v-on="$listeners"
    >
        <slot> <el-button icon="el-icon-upload" size="small">上传</el-button></slot>
    </el-upload>
</template>
<script>
export default {
    name: "BaseUploadList",
    model: {
        event: "change"
    },
    props: {
        value: {
            type: [Array],
            default() {
                return [];
            }
        },
        limit: {
            type: [Number, String],
            default: ""
        }
    },
    data() {
        return {
            fileList: []
        };
    },
    computed: {
        formatValue() {
            let fileList = this.value.reduce((acc, item) => {
                let obj = Object.assign({}, item, {
                    name: item.fileName || item.approvalFileName,
                    src: item.filePath || item.approvalFilePath
                });
                return [...acc, obj];
            }, []);
            return fileList;
        }
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        onChange(file, fileList) {},
        // eslint-disable-next-line no-unused-vars
        onSuccess(response, file, fileList) {
            let list = fileList.reduce((acc, item) => {
                if (item.response) {
                    return [...acc, item.response.data];
                } else {
                    return [...acc, item];
                }
            }, []);
            if (this.limit && list.length > this.limit) {
                list = list.slice(-this.limit);
            }
            this.$emit("change", list);
        },
        onRemove(file, fileList) {
            this.$emit("change", fileList);
        }
    }
};
</script>
<style lang="scss">
.el-upload-list__item {
    transition: none !important;
}
</style>
