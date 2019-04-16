<template>
	<view class="walletBox">
		<view class="wallettitle">
			<view class="moneytitle">可提取金额</view>
			<view class="moneynum">{{money}}</view>
		</view>
		<view class="walletmune">
			<view class="moneybox">
				<view v-for="(item,i) in munelist" :key='i' class="munebox" @tap="gopath(item.path)">
					<view class="imgbox">
						<image :src='item.img' style="width: 60upx;height: 60upx;"></image>
					</view>
					<view class="munename">{{item.name}}</view>
					<view class="munemoney">{{item.money}}元</view>
					<view class="munepath">></view>
					<view class="border" v-if="i!=munelist.length-1"></view>
				</view>
			</view>
			
			<view class="munebox withdraw" @tap="gopath(withdraw.path)" >
				<view class="imgbox">
					<image :src='withdraw.img' style="width: 60upx;height: 60upx;"></image>
				</view>
				<view class="munename">{{withdraw.name}}</view>
				<view class="munemoney">{{withdraw.money}}元</view>
				<view class="munepath">></view>

			</view>
			
		</view>
		<view class="btn">提取至钱包</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: '23333.00',
				munelist: [{
						name: '拼团佣金',
						path: '../mune/mune',
						img: '../../static/img/拼团.png',
						money: 0
					},
					{
						name: '分享下单',
						path: '../category/category',
						img: '../../static/img/分享下单.png',
						money: 0
					},
					{
						name: '推广商家收益',
						path: '../wallet/wallet',
						img: '../../static/img/推广商家收益.png',
						money: 0
					},
				],
				withdraw: {
					name: '已提取金额',
					path: '../mune/mune',
					img: '../../static/img/提取金额.png',
					money: 0
				}
			};
		},
		onNavigationBarButtonTap() {
			console.log('明细')
		},
		methods: {
			gopath(path) {
				uni.navigateTo({
					url: path
				});
			}
		}
	}
</script>

<style lang="less">
	.walletBox {
		height: 100%;
		width: 100%;
	}

	.wallettitle {
		height: 400upx;
		background-color: #0072fe;
		margin-top: -2px;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.moneytitle {
			font-size: 40upx;
			margin: 20upx;
		}

		.moneynum {
			font-size: 80upx;
		}

	}

	.walletmune {
		width: 100%;
		height: 100%;
		padding: 30upx;
		box-sizing: border-box;
	}
		.moneybox{
		border-radius: 20upx;
		width: 100%;
		height: 100%;
		background-color: #fdf9f3;
		}
		.withdraw{
			margin-top:40upx; 
			background-color: #fdf9f3;
		border-radius: 20upx;
		}
	.munebox {
		width: 100%;
		padding: 10upx 20upx;
		display: flex;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		flex-wrap: wrap;
		box-sizing: border-box;
		.imgbox {
			width: 15%;
			height: 100%;
			padding: 10upx;
			box-sizing: border-box;

		}

		.munename {
			width: 55%;
			text-align: left;
			color: #333;
			font-size: 42upx;
		}

		.munemoney {
			width: 20%;
			color: #999;
			font-size: 32upx;
		}

		.munepath {
			width: 10%;
			color: #999;
			font-size: 32upx;
		}

		.border {
			width: 90%;
			height: 2px;
			background-color: #fff;
			margin: 0 auto;
		}
	}

	.btn {
		position: fixed;
		bottom: 0;
		height: 100upx;
		line-height: 100upx;
		background-color: #0072fe;
		text-align: center;
		font-size: 40upx;
		width: 100%;
		color: #fff;
	}
</style>
