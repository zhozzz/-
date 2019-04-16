<template>
	<view class="content">
		<view class="titleBox">
			<view class="topbarbox">
				
				<view class="fouce" @tap="changeBar(0)" :class="selectIndex==0?'active':''">
				<view>发现</view>	
				<view class="bot-line"></view>	
				</view>
				<view class="near" @tap="changeBar(1)" :class="selectIndex==1?'active':''">
					<view>附近</view>	
					<view class="bot-line"></view>
				</view>
			</view>
			<view ><image src='../../../static/img/mune.svg' style="width:40upx;height: 40upx;" @click="mune"></image></view>
			
		</view>
			<!-- 搜索盒子 -->
			<view class="searchBox">
			<input type="text" placeholder="搜索" v-model="search" class="search uni-input"/>
			<image src='../../../static/img/search.svg' style="width:40upx;height: 40upx;"></image>
				
			</view>
		<view class="main" v-show="selectIndex==0"> 
				<Waterfall :list="list"  @click="choose" :loading='loading'></Waterfall>
		</view>	
		<view class="main" v-show="selectIndex==1"> 
				<Waterfall :list="list"  @click="choose"></Waterfall>

		</view>	
	</view>
</template>

<script>
		// 瀑布流组件
	import Waterfall from '@/components/waterfall/waterfall.vue';

	// 模拟 JSON 数据
	var data = require('@/common/json/data.json');
	export default {
		data() {
			return {
			selectIndex:0,
			list:[],
			page: 1,
			start: 0,
			end: 0,
			search:'',
			loading:false,
			}
		},
		onLoad() {

		},
		mounted(){
			this.getList();
		},
		onReachBottom() {
			this.page++;
			this.getList();
			},
		methods: {
			//跳转更多分类
			mune(){
				uni.navigateTo({
						url: '../../mune/mune'
					});
			},
			//选项卡
			changeBar(i){
				this.selectIndex=i;
			},
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
			},
		// 模拟数据加载
			getList() {
				if (this.list.length < data.list.length) {
// 						this.end = this.page * 10;
// 						this.list = this.list.concat(data.list.slice(this.start, this.end));
// 						this.start = this.end;	
							this.loading=true;
						setTimeout(()=>{
							this.end = this.page * 10;
							this.list = this.list.concat(data.list.slice(this.start, this.end));
							this.start = this.end;	
							this.loading=false;
						},200)
				}
			},
		},
		components:{
			Waterfall,
		}
	}
</script>

<style lang="less">
	.content {
		text-align: center;
		
		.titleBox{
			width: 100%;
			display: flex;
			height: 80upx;
			line-height: 80upx;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 2%;
			margin-bottom: 10upx;
			.topbarbox{
				width: 85%;
				display: flex;
				justify-content: center;
				padding-left:10%;
				 box-sizing: border-box;
					.fouce{
						font-size: 15pt;
						color: rgb(158,158,158);
						margin-right: 40upx;
						.bot-line{
							width: 80%;
							height: 4upx;
							background-color: #000;
							margin: 0 auto;
							display: none;
						}
					}
					.near{
						font-size: 15pt;
						color: rgb(158,158,158);
						.bot-line{
							width: 80%;
							height: 4upx;
							background-color: #000;
							margin: 0 auto;
							display: none;
						}
					}
					/* 切换激活样式 */
					.active{
						color: rgb(51,51,51);
						.bot-line{
							display: block
						}
					}
				 }
			
		}
			/* 搜索框 */
			.searchBox{
				position: relative;
				.search{
					height: 26pt;
					border-radius: 40upx;
					line-height: 26pt;
					text-align: left;
					margin: 20upx 40upx;
					border: 2upx solid #ccc;
					font-size: 10pt;
					box-sizing:border-box;
					padding-left:60upx; 
				}
				/* 放大镜图标定位 */
				image{
					position: absolute;
					left: 52upx;
					top: 16upx
				}
			}
	}
</style>
