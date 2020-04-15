<template>
    <div ref="gantt"></div>
</template>

<script>
import { gantt } from "dhtmlx-gantt";
export default {
    name: "Gantt",
    props: {
        tasks: {
            type: Object,
            default() {
                return { data: [], links: [] };
            }
        }
    },
    mounted: function() {
        //定义从后端获取或发送到后端的日期数据解析格式
        gantt.config.xml_date = "%Y-%m-%d";
        //设置时间坐标轴单位
        gantt.config.scales = [
            // { unit: "month", step: 1, format: "%F, %Y" },
            { unit: "day", step: 1, format: "%j, %D" }
        ];
        gantt.config.work_time = true;
        //将某一天设为工作日
        //gantt.setWorkTime({ date: new Date("2020-1-19") });
        //将某一天设为非工作日
        //gantt.setWorkTime({ date: new Date("2020-1-16"), hours: false });
        //console.log(gantt.isWorkTime(new Date(2020, 1, 19)));
        gantt.templates.scale_cell_class = function(date) {
            if (!gantt.isWorkTime({ date })) return "weekend";
        };
        gantt.templates.timeline_cell_class = function(task, date) {
            if (!gantt.isWorkTime({ task, date })) return "weekend";
        };
        //gantt.setWorkTime({ day: 6 });
        //gantt.config.correct_work_time = true;
        // eslint-disable-next-line no-unused-vars
        gantt.attachEvent("onTaskDblClick", function(id, e) {
            console.log(id);
            //any custom logic here
            return true;
        });

        // eslint-disable-next-line no-unused-vars
        gantt.attachEvent("onTaskCreated", function(task) {
            console.log(task);
            task.projectId = 1;
            return true;
        });
        //设置语言包
        gantt.locale = {
            date: {
                month_full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                day_full: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                day_short: ["日", "一", "二", "三", "四", "五", "六"]
            },
            labels: {
                dhx_cal_today_button: "今天",
                day_tab: "日",
                week_tab: "周",
                month_tab: "月",
                new_event: "新建日程",
                icon_save: "保存",
                icon_cancel: "关闭",
                icon_details: "详细",
                icon_edit: "编辑",
                icon_delete: "删除",
                confirm_closing: "请确认是否撤销修改!", //Your changes will be lost, are your sure?
                confirm_deleting: "是否删除日程?",
                section_description: "描述",
                section_time: "时间范围",
                section_type: "类型",

                /* grid columns */

                column_text: "任务名",
                column_start_date: "开始时间",
                column_duration: "持续时间",
                column_add: "",

                /* link confirmation */

                link: "关联",
                confirm_link_deleting: "将被删除",
                link_start: " (开始)",
                link_end: " (结束)",

                type_task: "任务",
                type_project: "项目",
                type_milestone: "里程碑",

                minutes: "分钟",
                hours: "小时",
                days: "天",
                weeks: "周",
                months: "月",
                years: "年"
            }
        };
        // eslint-disable-next-line no-unused-vars
        gantt.templates.task_class = function(start, end, task) {
            return "gantt_task_line";
        };
        gantt.init(this.$refs.gantt);
        gantt.parse(this.$props.tasks);
    }
};
</script>

<style>
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
.gantt_task_line {
    background-color: #65c16f;
    border: 1px solid #3c9445;
}
.weekend {
    background: #f1f1f1;
}
</style>
<style lang="scss" scoped>
/deep/.gantt_task_progress {
    background-color: #3c9445;
}
</style>
