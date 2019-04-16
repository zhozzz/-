<template>
	<view class="content" >
			<view class="usertitle">
					<view class="userimgbox">
						
						<image :src=userimgscr  class="userimg"></image>	
					</view>
						<view class="username">xxx</view>
						<view class="userintro">十九八七六五四三二一十九八七六五四三二一</view>
						<view class="userInfoBox">
								<view class="attention">
									<view class="attentionNum">{{attention}}</view>
									<view>关注</view>
								</view>
								<view class="fans">
									<view class="fansNum">{{fans}}</view>
									<view>粉丝</view>
								</view>
								<view class="like">
									<view class="likeNum">{{like}}</view>
									<view>点赞</view>
								</view>
						</view>
			</view>
			<view class="usermain" >
					<view class="walletBox">
						<view class="tabbox" @tap="gowallet">
							<image src="../../../static/img/wallet.svg"   class="walletimg"></image>
							<view class="text">钱包</view>
						</view>
						<view class="tabbox">
							<image src="../../../static/img/tuiguang.svg"  class="walletimg"  ></image>
							<view class="text">关注</view>

						</view>
					</view>
					<view class="shopBox">
						<view class="shopBoxTitle" @tap="erwei">
							全部订单
						</view>
						<view class="orderBox">
							<view class="orderitem"  v-for="(item,i) in orderlist" :key='i'>
								<image :src='item.img' mode="" class="orderimg"></image>
								<view class="ordername" >
									{{item.name}}
								</view>
							</view>
						</view>
					</view>
					<view >
						<view class="infoBOx">
							<view class="infoitem" v-for="(item,i) in infoitem" :key="i" 
							:class="infoindex==i?'active':''" 
							@tap="infoTap(i)">
								{{item.name}}
							</view>
						
						</view>
						<view class="infoTab">
							<scroll-view class="infotabitem" 
							v-for="(item,i) in infoitem" 
							:key="i" 
							scroll-x
							:class="infoindex==i?'active':''" 
							@touchmove="touchmove"
							@touchstart="touchstar">
								<Waterfall :list="list"  @click="choose" :loading='loading'></Waterfall>
							</scroll-view>
						</view>
					<!-- 	<swiper class="infoTab" :current=infoindex @change='tabchange' duration=300>
							
							<swiper-item v-for="(item,i) in infoitem" :key="i" class="infoItemBox" >
													
						              <scroll-view class="infotabitem" scroll-y='true' >
															
																	{{item.name}}
															
														</scroll-view>
													
						  </swiper-item>
						</swiper> -->
						
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
				//用户信息数据
				userimgscr:"../../../static/img/tarck.jpg",
				attention:30,
				fans:12,
				like:60,
				//页面组件参数
				orderlist:[{name:'待付款',img:'../../../static/img/fukuan.svg',id:1},
										{name:'待使用',img:'../../../static/img/daishiyong.svg',id:2},
										{name:'待评价',img:'../../../static/img/pingjia.svg',id:3},
										{name:'退款',img:'../../../static/img/tuikuan.svg',id:4}
										],
				infoitem:[{name:'发布'},{name:'收藏'}],
				//瀑布流参数
				infoindex:0,
				page: 1,
				start: 0,
				end: 0,
				list: [],			
				loading:false,
				//滑动参数
				startX:0,
				startY:0,
				endX:0,
				endY:0,
				distanceX:0,
				distanceY:0,
			
			}
		},
		components:{
			Waterfall,
		},
		onLoad() {
			  this.getList();
		},
		onReachBottom() {
			this.page++;
			this.getList();
			},
		methods: {
			infoTap(i){
				this.infoindex=i
			},
			gowallet(){
				console.log(1);
				uni.navigateTo({
						url: '../../wallet/wallet'
					});
			},	
			tabchange(i){
				this.infoindex=i.detail.current
			},
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item.id)
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
						//判断滑动方向
						if(Math.abs(this.distanceX)>Math.abs(this.distanceY) && this.distanceX>0){
								this.infoindex==0?0:this.infoindex--
								console.log('往右滑动',this.infoindex);
						}else if(Math.abs(this.distanceX)>Math.abs(this.distanceY) && this.distanceX<0){
								this.infoindex==1?1:this.infoindex++
								console.log('往左滑动',this.infoindex);
						}else{
								console.log('点击未滑动');
						}
			}
				
					
		}
	}
</script>

<style lang="less">
	page{
		
		height: 100%
	}
	.content {
	background-color: #fdf9f3;
	height: 100%;
		.usertitle{
			width: 100%;
			height: 440upx;
			background-image: url('../../../static/img/userimg.jpg');
			background-size: 100% 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
				text-align: center;
			.userimgbox{
				height: 40%;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				.userimg{
					width: 160upx;
					height: 160upx;
					border-radius: 50%;
					border: 4upx solid #000;
				}
			}
			.username{
				font-size: 60upx;
				color: rgb(253,249,243);
			
			}
			.userintro{
				text-align: center;
				font-size: 24upx;
				color: rgb(255,203,87);
			

			}
			.userInfoBox{
				width: 90%;
				height: 100upx;
				display: flex;
				justify-content: space-around;
				font-size: 36upx;
				color: rgb(255,255,255);
			}
		}
	
		.usermain{
			width: 90%;
			position: relative;
			top: -10upx;
			background-color: #fff;
			margin: 0 auto;
			border-radius:20upx; 
			height: 100%;
			.walletBox{
				display: flex;
				justify-content: center;
				height: 200upx;
				margin-bottom: 20upx;
				.tabbox{
					width: 50%;
						font-size: 42upx;
						color: rgb(51,51,51);
						display: flex;
						justify-content: center;
						align-items: center;
						border-bottom: 1px solid rgb(254, 96,0);
					.walletimg{
						width:104upx;
						height: 100upx;
						margin-right: 20upx;
					}
					.text{
						line-height: 120upx;
					}
				}
			}
				
			.shopBox{
					font-size: 30upx;
					color: rgb(51,51,51);
					box-sizing: border-box;
					padding: 10upx 20upx;
					margin-bottom: 20upx;
				.orderBox{
					display: flex;
					justify-content: space-around;
					align-items: center;
					width: 100%;
					margin-top: 20upx;
					.orderitem{
						width: 25%;
						text-align: center;
						.orderimg{
							width: 50upx;
							height: 50upx;
						}
					}
				}
			}
			.infoBOx{
				display: flex;
				justify-content: center;
				margin: 20upx 0;
				.infoitem{
					width: 50%;
					text-align: center;
					font-size: 30upx;
					color: rgb(51,51,51);
				}
				.active{
					color: red;
				}
			}
			.infoTab{
				width: 100%;
				.infotabitem{
				display: none;
				}.active{
					display: block;
				}
				
			}
		}
	}
</style>
