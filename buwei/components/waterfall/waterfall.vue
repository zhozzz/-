<template>
	<view class="waterfall">
		

	   <view class="container">  
       
				 <view class="leftbox">
					 <view class="itembox"  v-for="(item,i) in leftlist" :key='i' @click="choose(item)">
					 						<view class="pic">
					 						<image class="image" style="width: 100%; display: block;border-radius: 40upx;min-height:100pt;max-height: 240pt ;"
					 							:src="item.image ? item.image : error"></image>
					 					</view>
					 					<view class="content">
					 						<text>{{item.content}}</text>
					 						<view class="user">
					 							<image style="width: 40upx; height: 40upx; border-radius: 50%; margin-right: 10upx;" 
					 								:src="item.user.avatar ? item.user.avatar : error"></image>
					 							{{item.user.name}}
					 						</view>
					 					</view>
					 </view>
				 </view>
				 <view class="rightbox">
					 <view class="itembox"  v-for="(item,i) in rigthlist" :key='i' @click="choose(item)">
					 						<view class="pic">
					 						<image class="image" style="width: 100%; display: block;border-radius: 40upx;min-height:100pt;max-height: 240pt ;"
					 							:src="item.image ? item.image : error"></image>
					 					</view>
					 					<view class="content">
					 						<text>{{item.content}}</text>
					 						<view class="user">
					 							<image style="width: 40upx; height: 40upx; border-radius: 50%; margin-right: 10upx;" 
					 								:src="item.user.avatar ? item.user.avatar : error"></image>
					 							{{item.user.name}}
					 						</view>
					 					</view>
					 </view>
				 </view>
		</view> 
					<view v-if="loading" class="loading">正在加载中</view>
	</view>
</template>

<script>
		
	export default{
		props: {
			// 数据列表
			list: {
				type: Array,
				default() {
					return []
				}
			},
			//正在加载中文字显示
			loading: {
				type: Boolean,
				default() {
					return false
				}
			},
		},
		data(){
			return {
				error: '/static/nairenk-waterfall-flow/error.jpg', 
				leftlist:[],
				rigthlist:[],
			}
		},
			
		created(){
			for(let i=0;i<this.list.length;i++){
				i%2==0?this.leftlist.push(this.list[i]):this.rigthlist.push(this.list[i])
			}
		},
		methods:{
			//传入的点击事件
			choose(e) {
				let item = e;
				/* #ifdef H5 */
				// item = JSON.parse(e.currentTarget.dataset.item);
				/* #endif */
				this.$emit('click', item);
			}
		},
		
		watch:{
			//监听父组件传入数据变化
			list:function(){
				this.leftlist=[];
				this.rigthlist=[];
				for(let i=0;i<this.list.length;i++){
					//分别放入左右容器的数组
					i%2==0?this.leftlist.push(this.list[i]):this.rigthlist.push(this.list[i])
				}
			}
		}
		
	}
</script>

<style scoped>
.waterfall{
			margin-bottom: 100upx;
		}
.container{
		width: 100%;
		display: flex;
		justify-content:space-around;
}

.leftbox , .rightbox{
	width: 48%;
	
}
 .pic {
		background: #fff;
	}
	.content {
		padding: 20upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.content text {
		width: 100%;
		font-size: 24upx;
		margin-bottom: 20upx;
	}
	.user {
		display: flex;
		width: 220upx;
		overflow: hidden;
		font-size: 26upx;
		color: #666;
	}
	.loading{
		height: 50upx;
		line-height:50upx;
		font-size: 30upx;
		margin: 20upx 0;
		color: #ccc;
		text-align: center;
	}
</style>
