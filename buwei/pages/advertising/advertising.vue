<template>
	<view class="advbox">
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
		
		<!-- 跟随跳转 -->
		<movable-area class="movebox">
			
			<movable-view class="pathmove" 
			v-if="flag"
			direction='horizontal' 
			@change="changemove">
			<view class="pathtext" @tap="goshop">
				前往店铺
				
			</view>
			
			</movable-view>
		</movable-area>
		<view class="shopbox" :style="movenum">
			 
		</view>
		<!-- 广告主体 -->
		<view class="advcontent">
			
			
			
		</view>
	</view>
</template>

<script>
	import CryptoJS from 'crypto-js'
	export default {
		data() {
			return {
				x:0,
				old:{
					x:0,
				},
				movenum:{
					left:'-200px',
				},
				windowWidth:0,
				flag:true
			};
		},
			
		onLoad(){
			let _this=this
			uni.getSystemInfo({
				success:function(res){
					console.log(_this);
					_this.windowWidth=res.windowWidth
					_this.movenum.left=-res.windowWidth+'px'
				}
			})
		},
		methods: {
			goback(){
				uni.navigateBack({
					delta: 1
				});
			},
			shoucang() {
				console.log('收藏')
			},
			fenxiang() {
				console.log('分享')
			},
			changemove(e){
						this.old.x = e.detail.x
						this.movenum.left=this.windowWidth-this.old.x+'px';
							
						if(e.detail.x>=this.windowWidth/3){
							this.movenum.left=0;
							this.flag=false;
						}else {
							this.movenum.left=-this.windowWidth+'px';
							this.flag=true;
						}	
			},
			goshop(){
				uni.navigateTo({
					url: '../shop/shop',
				
				});
			}



		
		}
	}
</script>

<style lang="less">
	.advbox{
		// position: relative;
		overflow: hidden;
	}
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
	.movebox{
		width: 100%;
		position: relative;
	}
	.shopbox{
		width: 100%;
		position: relative;
		background-color: red;
		height:500px;
		transition: all linear 1s;
	}
	.pathmove{
		width: 200upx;
		height: 200upx;
		position: fixed;
		top: 200px;
		background-color: red;
		border-radius:0 100% 100% 0;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all linear 1s;
		z-index: 1000;
		.pathtext{
			width: 100upx;
			position: absolute;
			left: 20%
	}
	}
	.advcontent{
		height: 2000px;
		background-color: aquamarine;
	}
</style>
