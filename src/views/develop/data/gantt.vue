<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: yanxin
 * @Date: 2020-04-08 14:26:39
 * @LastEditors: yanxin
 * @LastEditTime: 2020-04-10 11:16:11
 -->
<template>
    <div class="container">
        <gantt class="left-container" :tasks="tasks"></gantt>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { gantt } from "dhtmlx-gantt";
export default {
    name: "App",
    data() {
        return {
            tasks: {
                data: [
                    {
                        id: 1,
                        text: "任务一",
                        start_date: "2020-01-17",
                        duration: 3,
                        progress: 0.6
                    },
                    {
                        id: 2,
                        text: "任务二",
                        start_date: "2020-01-20",
                        duration: 3,
                        progress: 0.4
                    }
                ],
                links: [{ id: 1, source: 1, target: 2, type: "0" }]
            }
        };
    },
    created() {
        // setTimeout(() => {
        //   let taskId = 1;
        //   console.log(gantt.getTask(taskId));
        //   gantt.getTask(taskId).text = "Task #13";
        //   gantt.updateTask(taskId);
        // }, 1000);
    }
};
</script>

<style>
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}
.container {
    height: 100%;
    width: 100%;
}
.left-container {
    overflow: hidden;
    position: relative;
    height: 100%;
}
</style>
