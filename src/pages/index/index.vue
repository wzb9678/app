<template>
	<tm-app>
		<tm-navbar hideHome title="" :height="44" :shadow="0">
			<template v-slot:left>
				<view class="ml-20">
					<tm-image :width="160" :height="33" :src="logoimg"></tm-image>
				</view>
			</template>
			<template v-slot:right>
				<view class="mr-20">
					<tm-icon :font-size="30" :color="color" :name="name" @click="setDark"></tm-icon>
				</view>
			</template>
		</tm-navbar>
		<tm-carousel autoplay :margin="[0,16]" :width="710" :height="300" rangKey="img"
			:list="listimg" model="rect" color="#ccc" @click="carouselClick">
		</tm-carousel>
		<tm-sheet :shadow="0" :margin="[20,10]">
		</tm-sheet>
		<tabbar :acc="0"></tabbar>
	</tm-app>

</template>
<script setup>
	import tabbar from '@/components/tabbar.vue'
	import { Home } from "@/api/api.ts"
	import logoimg from "@/static/logo.png"
	import { ref } from "vue";
	import { useTmpiniaStore } from '@/tmui/tool/lib/tmpinia';
	import { onShow } from '@dcloudio/uni-app';
	const store = useTmpiniaStore();
	const listimg = ref([])
	const name = ref('tmicon-md-moon')
	const color = ref('')
	Home.bannerList().then(res => {
		listimg.value = res.map((item) => {
			return { type: 'img', ...item }
		})
	})
	onShow(() => {
		uni.hideTabBar({
			animation: false
		})
	})
	//获取手机状态栏高度
	console.log(uni.getSystemInfoSync().statusBarHeight);
	// 轮播图点击
	const carouselClick = (i) => {
		listimg.value.forEach((item, index) => {
			if (i == index) {
				console.log(item.id);
			}
		})
	}
	// 暗黑模式切换
	const setDark = () => {
		if (store.tmStore.dark) {
			name.value = "tmicon-md-moon"
			store.setTmVuetifyDark(false)
			color.value = ''
		} else {
			name.value = "tmicon-ios-sunny"
			store.setTmVuetifyDark(true)
			color.value = '#FFCC00'
		}
	}
</script>
<style>
</style>
