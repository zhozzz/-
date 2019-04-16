<template>
	<view class="shopbox">
		<!-- 头部 -->
		<view class="advtitle">
			<!-- 返回 -->
				<view @tap="goback">
					<image src="../../static/img/back.svg" style="height:40upx;width:40upx;"></image>
				</view>
				<!-- 收藏/分享 -->
				<view class="imgbox">
					<view @tap="shoucang">
						<image src="../../static/img/shoucang.svg" style="height:60upx;width:60upx;"></image>
					</view>
					<view @tap="fenxiang">
						<image src="../../static/img/fenxiang.svg" style="height:60upx;width:60upx;"></image>
					</view>
				</view>
		</view>
		<!-- 商家信息头部 -->
		<view class="merchantInfo">
			<view class="infobox">
				<view class="merchantName">
					{{merchant.name}}
				</view>
				
			</view>
			<view class="imgbox">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				merchant:{
					name:'黄焖鸡米饭',  //店名
					grade:4.0,  //评分
					evaluate:'', //评价人数
					price:60, //人均
					operation:true, //营业中
					time:'9:00~12:00', //营业时间 
					popularity :25, //人气
				},
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.advtitle {
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			display: flex;
			justify-content: space-between;
			padding: 10upx;
			box-sizing: border-box;

			.imgbox {
				display: flex;
				justify-content: space-around;

				view {
					margin: 0 20upx;
				}
			}
		}
	.merchantInfo{
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		display: flex;
		.infobox{
			width: 70%;
		}
		.imgbox{
			width: 30%;
		}
	}
	
	
</style>
