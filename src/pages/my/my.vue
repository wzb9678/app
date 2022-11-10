<template>
	<tm-app>
		我的
		<tabbar :acc="3"></tabbar>
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
