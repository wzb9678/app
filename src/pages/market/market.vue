<template>

	<tm-app>
		<tm-text :font-size="24" _class="text-weight-b" label="我是文本"></tm-text>
		<tabbar :acc="1"></tabbar>
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
