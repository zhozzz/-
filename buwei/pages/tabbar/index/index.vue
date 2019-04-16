<template>
	<view class="content">
		<!-- 头部盒子 -->
		<view class="titleBox">
			<view class="city" @tap="mapclick">
				<image src='../../../static/img/map.svg' style="width:40upx;height: 40upx;"></image>
				{{city||'地区'}}
			</view>
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
			
		</view>
			<!-- 搜索盒子 -->
			<view class="searchBox">
			<input type="text" placeholder="搜索" v-model="search" class="search uni-input"/>
			<image src='../../../static/img/search.svg' style="width:40upx;height: 40upx;"></image>
				
			</view>
			<view class="wf_main" v-show="selectIndex==0">
				<!-- 关注 瀑布流 -->
				<view class="munetab" id="tab-bar" scroll-x :scroll-left="scrollLeft">
				
						<view v-for="(item,i) in tabList" :key="i" :class="['muneitem','swiper-tab-list',fouceindex==i ? 'active' : '']" :id="item.id"
						 :data-current="i"  @tap="foucechange(i)">{{item.name}}</view>
					
				</view>
				<view class="nearmune">
				
				<view class="munemain" v-for="(item,i) in tabList" 
				:key='i' 
				:class="fouceindex==i?'active':''"
				@touchmove="touchmove"
				@touchstart="touchstar"
				@touchend="touchend">
				{{item.name}}
					<Waterfall :list="list"  @click="choose" :loading="loading"></Waterfall>

				</view>
				</view>
			</view>
			<view class="wf_main" v-show="selectIndex==1">
				<!-- 附近 瀑布流 -->
				<view class="munetab">
					<view v-for="(item,i) in tabList " :key='i' 
					class='muneitem' 
					:class="nearindex==i?'active':''" 
					@tap="naerchange(i)">
						{{item.name}}
					</view>
				</view>
				<view class="nearmune">
				<view class="munemain" v-for="(item,i) in tabList" :key='i' 
				:class="nearindex==i?'active':''"
				@touchmove="touchmove"
				@touchstart="touchstar"
				@touchend="touchend">
			{{item.name}}
				<Waterfall :list="list"  @click="choose" :loading="loading"></Waterfall>

				</view>
				</view>
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
				title: 'Hello',
				search:'',
				//瀑布流参数
				page: 1,
				start: 0,
				end: 0,
				loading:false,
				list: [], // 列表
				city:"成都",
				show:false,
				selectIndex:0,
				tabList: [
						{ name: '吃',id:'eat' },
						{ name: '喝',id:'drink' },
						{ name: '住宿',id:'sleep'},
						{ name: '玩乐',id:'play' }
					],
				nearindex:0,
				fouceindex:0,
				scrollLeft: 0,
					//滑动参数
				startX:0,
				startY:0,
				endX:0,
				endY:0,
				distanceX:0,
				distanceY:0,
				};
			},
		onLoad() {
				
			},
		mounted() {
			  this.getList();
			},
	
		// 触底加载更多
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
			//地图点击
			mapclick(){
				uni.chooseLocation({
					success: function (res) {
						this.city=res.name
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
					})
			},
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
				uni.navigateTo({
						url: '../../advertising/advertising?id='+item.id
					});
			},
			// 模拟数据加载
				getList() {
					if (this.list.length < data.list.length) {
						this.loading=true;
						setTimeout(()=>{
							this.end = this.page * 10;
							this.list = this.list.concat(data.list.slice(this.start, this.end));
							this.start = this.end;	
							this.loading=false;
						},200)	
					}
				},
				
			foucechange(i){
				this.fouceindex=i
			},
				
			foucemovechange(i){
				this.fouceindex=i

			},
			naerchange(i){
				this.nearindex=i
			},
			//触摸滑动监听
				
			touchstar(e){
				 this.startX = e.changedTouches[0].pageX;
				 this.startY = e.changedTouches[0].pageY;
			},	
			touchmove(e){
				  //获取滑动屏幕时的X,Y
						this.endX = e.changedTouches[0].pageX;
						this.endY = e.changedTouches[0].pageY;
						//获取滑动距离
						this.distanceX = this.endX-this.startX;
						this.distanceY = this.endY-this.startY;
			},
			touchend(e){
				//判断滑动方向
				if(Math.abs(this.distanceX)>Math.abs(this.distanceY) && this.distanceX>0){
						this.fouceindex==0?0:this.fouceindex--;
						// console.log('往右滑动',this.fouceindex);
				
				}else if(Math.abs(this.distanceX)>Math.abs(this.distanceY) && this.distanceX<0){
						this.fouceindex==3?3:this.fouceindex++;								
						// console.log('往左滑动',this.fouceindex);
				}else{
						console.log('点击未滑动');
				}
			},
		},
		components:{ 
		Waterfall},
		
};
</script>

<style scoped lang='less'>
.content {
	text-align: center;

	/* 头部样式 */
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
		
		.city{
			font-size: 10pt;
			color: rgb(51,51,51);
			display: flex;
			justify-content: center;
			align-items: center;
			width: 15%
		}
		.topbarbox{
			width: 85%;
			display: flex;
			justify-content: center;
			padding-right:10%;
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
		
	.wf_main{
		.munetab{
			width: 100%;
			display: flex;
			justify-content: space-between;
			height: 80upx;
			line-height: 80upx;
			background: #fff;
			color: #000;
			box-sizing: border-box;
			padding: 0 20upx;
			.muneitem{
				width: 25%;
			}
			.active{
				color: red
			}
		}
		.nearmune{
			
			.munemain{
				display: none;
			}
			.active{
				display: block
			}
		}
		
	}	
}
</style>
