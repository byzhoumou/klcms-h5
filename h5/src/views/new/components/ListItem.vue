<template>
    <div class="new-list">
        <ListItem1
            v-for="(v, k) in dataList"
            :key="k"
            :row="v.works"
        ></ListItem1>
    </div>
</template>

<script setup lang="ts">
    import { api } from '@/api'

    const props = defineProps({
        active: {
            type: Number,
            required: true,
        },
    })

    const dataList = ref()
    const activeList = reactive<
        (
            | 'MONDAY'
            | 'TUESDAY'
            | 'WEDNESDAY'
            | 'THURSDAY'
            | 'FRIDAY'
            | 'SATURDAY'
            | 'SUNDAY'
        )[]
    >([
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
    ])

    const fetchData = async () => {
        await api
            .preUpdatedControllerGetPreUpdatedList({
                day: activeList[props.active],
            })
            .then((res) => {
                dataList.value = res.data.rows || []
            })
    }

    onMounted(() => {
        fetchData()
    })
</script>

<style scoped lang="scss">
    .-container {
    }
</style>
