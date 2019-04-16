<template>
	<view>
	<view class="banner">
		<image :src="banner"></image>
	</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"",
				banner:''
			};
		},
		onLoad(option) {
			this.title=option.name
		},
	}
</script>

<style lang="less">
.banner{
		width: 100%;
		height: 24.262vw;
		border-radius: 10upx;
		overflow: hidden;
		box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.3);
		image{
			width: 100%;
			height: 24.262vw;
		}
	}
</style>
