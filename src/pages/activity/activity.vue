<template>
	<tm-app>
		活动
		<tabbar :acc="2"></tabbar>
	</tm-app>
</template>

<script setup>
	import tabbar from '@/components/tabbar.vue'
	import { onShow } from '@dcloudio/uni-app';
	onShow(() => {
		uni.hideTabBar({
			animation: false
		})
	})
</script>

<style>

</style>
