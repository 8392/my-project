<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2019-12-21 10:33:17
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-15 10:57:15
 -->
<template>
    <div>
        <el-table :data="tableData" :span-method="objectSpanMethod" show-summary border style="width: 100%">
            <el-table-column label="财务费用预算">
                <span slot="header" slot-scope="">
                    <el-row>
                        <el-col :span="12">项目名称</el-col>
                        <el-col :span="12">红红火火恍恍惚惚</el-col>
                    </el-row>
                </span>
                <el-table-column prop="id" label="一级分类" width="180"> </el-table-column>
                <el-table-column prop="id1" label="二级分类" width="180"> </el-table-column>
                <el-table-column prop="name" label="送审金额"> </el-table-column>
                <el-table-column prop="amount1" label="审定金额"> </el-table-column>
                <el-table-column prop="amount2" label="审增率">
                    <slot slot-scope="scope">
                        <el-input v-model="scope.row.amount2" placeholder="请输入"></el-input>
                    </slot>
                </el-table-column>
                <el-table-column prop="amount3" label="审减率"> </el-table-column>
            </el-table-column>
        </el-table>
        <base-tree-select v-model="value1" :data="data"></base-tree-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: "项目前期费用",
                    id1: "可行性研究费",
                    name: "王小虎",
                    amount1: "234",
                    amount2: "3.2",
                    amount3: 10,
                    rowspan: 3
                },
                {
                    id: "项目前期费用",
                    id1: "勘察费",
                    name: "王小虎",
                    amount1: "165",
                    amount2: "4.43",
                    amount3: 12
                },
                {
                    id: "项目前期费用",
                    id1: "设计费",
                    name: "王小虎",
                    amount1: "621",
                    amount2: "2.2",
                    amount3: 17
                },
                {
                    id: "其他费用",
                    id1: "监理费",
                    name: "王小虎",
                    amount1: "324",
                    amount2: "1.9",
                    amount3: 9,
                    rowspan: 2
                },
                {
                    id: "其他费用",
                    id1: "土地使用税",
                    name: "王小虎",
                    amount1: "539",
                    amount2: "4.1",
                    amount3: 15
                }
            ],
            value1: [1, 11],
            data: []
        };
    },
    created() {
        setTimeout(() => {
            this.data = [
                {
                    id: 1,
                    label: "一级",
                    children: [
                        {
                            id: 11,
                            label: "二级1",
                            children: [
                                {
                                    id: 111,
                                    label: "三级1"
                                }
                            ]
                        },
                        {
                            id: 12,
                            label: "二级2"
                        }
                    ]
                }
            ];
        }, 100);
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex % 2 === 0) {
                if (columnIndex === 0) {
                    return [1, 2];
                } else if (columnIndex === 1) {
                    return [0, 0];
                }
            }
        },

        // eslint-disable-next-line no-unused-vars
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                return {
                    rowspan: row.rowspan || 0,
                    colspan: 1
                };
            }
        }
    }
};
</script>
