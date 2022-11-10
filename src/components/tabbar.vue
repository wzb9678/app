<template>
	<tm-tabbar :autoSelect="false" v-model:active="acc">
		<tm-tabbar-item activeColor="orange" open-type='switchTab' url="/pages/index/index" text="首页"
			icon='tmicon-collection-fill'></tm-tabbar-item>
		<tm-tabbar-item activeColor="orange" open-type='switchTab' url="/pages/market/market" text="市场"
			icon='tmicon-collection-fill'></tm-tabbar-item>
		<tm-tabbar-item activeColor="orange" open-type='switchTab' url="/pages/activity/activity" text="活动"
			icon='tmicon-collection-fill'></tm-tabbar-item>
		<tm-tabbar-item activeColor="orange" open-type='switchTab' url="/pages/my/my" text="我的"
			icon='tmicon-collection-fill'></tm-tabbar-item>
	</tm-tabbar>
</template>
<script setup>
	import { onShow } from '@dcloudio/uni-app';
	onShow(() => {
		uni.hideTabBar({
			animation: false
		})
	})
	defineProps({
		acc: {
			type: Number,
			default: 0
		},
	})
</script>
