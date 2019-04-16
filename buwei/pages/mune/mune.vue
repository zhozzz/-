
<template>
	<view class="page-body" :style="'height:'+height+'px'">
		<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'" :scroll-top="scrollLeftTop" scroll-with-animation>
			<view class="nav-left-item" @click="categoryClickMain(index)" :key="index" :class="index==categoryActive?'active':''"
				v-for="(item,index) in classifyData">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
			<view v-for="(foods,index) in classifyData" :key="index" class="box">
				<view :id="i==0?'first':''" class="nav-right-item" v-for="(item,i) in foods.foods" :key="i" @click="cart(item.name)">
					<image :src="item.icon" />
					<view>{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import classifyData from '../../common/classify.data.js';
	export default {
		data() {
			return {
				name: "wkiwi",
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollLeftTop: 0,
				// scrollHeight: 0,
				classifyData:classifyData,
				arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],//初始值，后边计算会根据手机适配覆盖
				leftItemHeight: 51,//49行会计算出新值进行覆盖
				navLeftHeight:0,//左边scroll-view 内层nav的总高度
				diff: 0,//左边scroll-view 内层nav的总高度与视口之差
				tabBarHeight:0,//如果此页面为Tab页面，自己改变高度值,,一般tab高度为51
			}
		},
		onShow() {
		},
		onLoad: function () {
			this.height = uni.getSystemInfoSync().windowHeight - this.tabBarHeight;
		},
		onReady() {
			let _this = this;
			let selectorQuery=uni.createSelectorQuery();
			selectorQuery.selectAll('.nav-left-item').boundingClientRect(function(rects) {
				_this.leftItemHeight  =  rects[0].height;
				_this.navLeftHeight = _this.leftItemHeight * classifyData.length;
				_this.diff =  _this.navLeftHeight - _this.height;
			});
			selectorQuery.selectAll('.box').boundingClientRect(function(rects) {
				let arr = [0];
				let top = 0;
				rects.forEach(function(rect){
// 					rect.id      // 节点的ID
// 					rect.dataset // 节点的dataset
// 					rect.left    // 节点的左边界坐标
// 					rect.right   // 节点的右边界坐标
// 					rect.top     // 节点的上边界坐标
// 					rect.bottom  // 节点的下边界坐标
// 					rect.width   // 节点的宽度
// 					rect.height  // 节点的高度
					top += rect.height;
					arr.push(top)
					})
					_this.arr = arr
				}).exec()
		},
		methods: {
			scroll(e) {
				let _this = this
				if(this.timeoutId){
					clearTimeout(this.timeoutId);
				}
				this.timeoutId = setTimeout(function(){ //节流
					_this.scrollHeight = e.detail.scrollTop + _this.height/2;
					for (let i = 0; i < _this.arr.length;i++) {
						let height1 = _this.arr[i];
						let height2 = _this.arr[i+1];
						if (!height2 || (_this.scrollHeight >= height1 && _this.scrollHeight < height2)) {
							_this.categoryActive = i;
							(_this.diff>0) && (_this.scrollLeftTop = Math.round((_this.categoryActive * _this.diff)/(classifyData.length-1)));
							return false;
						}
					}
					_this.categoryActive = 0;
					_this.timeoutId = undefined;
				}, 10)
			},
			categoryClickMain(index) {
				this.categoryActive = index;
				this.scrollTop = this.arr[index]
			},
			cart: function (text) {
				uni.showToast({
					title: text,
					icon: "none",
				})
			}
		},
		components: {
		}
	}
</script>

<style>
	.page-body {
		display: flex;
		background: #fff;
		overflow: hidden;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 25%;
		background: #fff;
	}

	.nav-left-item {
		height: 100upx;
		border-right: solid 1px #f1f1f1;
		/* border-bottom: solid 1px #f1f1f1; */
		font-size: 33upx;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.nav-left-item:last-child{
		border-bottom: none;
	}
	.nav-right {
		width: 75%;
	}
	.box {
		display: block;
		overflow: hidden;
		border-bottom: 20upx solid #f3f3f3;
	}
	.box:last-child {
		border: none;
	}
	.nav-right-item {
		width: 28%;
		height: 220upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
		background: #fff;
	}

	.nav-right-item image {
		width: 150upx;
		height: 150upx;
	}

	.active {
		color: #ff6700;
		background: #fff;
		border-right: 0;
	}
	::-webkit-scrollbar {/*取消小程序的默认导航条样式*/
   width: 0;
   height: 0;
   color: transparent;
}
</style>

<!-- <template>
	<view>
		<view class="category-list">
		
			<scroll-view  scroll-y="true" class="left" >
		        <view class="row" v-for="(category,index) in categoryList" :key="category.id" :class="[index==showCategoryIndex?'on':'']" @tap="showCategory(index)">
					<view class="text">
						<view class="block"></view>
						{{category.title}}
					</view>
				</view>
				
		    </scroll-view>
			
			<scroll-view  scroll-y="true" class="right" >
			    <view class="category" v-for="(category,index) in categoryList" :key="category.id" v-show="index==showCategoryIndex" >
					
					<view class="list">
						<view class="box" v-for="(box,i) in category.list" :key="i" @tap="toCategory(box)">
							<image :src="'../../static/img/category/list/'+box.img"></image>
							<view class="text">{{box.name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showCategoryIndex:0,
				categoryList:[
					{id:1,title:'家用电器',banner:'../../static/img/category/banner.jpg',list:[
						{name:'冰箱',	img:'1.jpg'},
						{name:'电视',	img:'2.jpg'},
						{name:'空调',	img:'3.jpg'},
						{name:'洗衣机',	img:'4.jpg'},
						{name:'风扇',	img:'5.jpg'},
						{name:'燃气灶',	img:'6.jpg'},
						{name:'热水器',	img:'7.jpg'},
						{name:'电吹风',	img:'8.jpg'},
						{name:'电饭煲',	img:'9.jpg'}
					]},
					{id:2,title:'办公用品',banner:'../../static/img/category/banner.jpg',list:[
						{name:'打印机',	img:'1.jpg'},
						{name:'路由器',	img:'2.jpg'},
						{name:'扫描仪',	img:'3.jpg'},
						{name:'投影仪',	img:'4.jpg'},
						{name:'墨盒',	img:'5.jpg'},
						{name:'纸类',	img:'6.jpg'}
					]},
					{id:3,title:'日常用品',banner:'../../static/img/category/banner.jpg',list:[
						{name:'茶具',	img:'1.jpg'},
						{name:'花瓶',	img:'2.jpg'},
						{name:'纸巾',	img:'3.jpg'},
						{name:'毛巾',	img:'4.jpg'},
						{name:'牙膏',	img:'5.jpg'},
						{name:'保鲜膜',	img:'6.jpg'},
						{name:'保鲜袋',	img:'7.jpg'}
					]},
					{id:4,title:'蔬菜水果',banner:'../../static/img/category/banner.jpg',list:[
						{name:'苹果',	img:'1.jpg'},
						{name:'芒果',	img:'2.jpg'},
						{name:'椰子',	img:'3.jpg'},
						{name:'橙子',	img:'4.jpg'},
						{name:'奇异果',	img:'5.jpg'},
						{name:'玉米',	img:'6.jpg'},
						{name:'百香果',	img:'7.jpg'}
					]},
				]
			};
		},
		methods: {
			//分类切换显示
			showCategory(index){
				this.showCategoryIndex = index;
			},
			toCategory(e){
				// uni.showToast({title: e.name,icon:"none"});
				uni.navigateTo({
					// url: '../goods/goods-list?cid='+e.id+'&name='+e.name
					url: '../category/category?name='+e.name
				});
			},
			//搜索跳转
			toSearch(){
				uni.showToast({title: "建议跳转到新页面做搜索功能"});
			}
		}
	}
</script>

<style lang="less">
.category-list{
		width: 100%;
		background-color: #fff;
		display: flex;
		.left,.right{
			position: absolute;
			
			top: 0upx;
// 			/*  #ifdef  APP-PLUS  */
// 			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			// bottom: 0upx;
		}
		.left{
			width: 24%;
			left: 0upx;
			background-color: #f2f2f2;
			.row{
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				.text{
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #3c3c3c;
					.block{
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}
				&.on{
					height: 100upx;
					background-color: #fff;
					.text{
						font-size: 30upx;
						font-weight: 600;
						color: #2d2d2d;
						.block{
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: #f06c7a;
						}
					}
				}
			}
		}
		.right{
		   width: 76%;
			left: 24%;
			.category{
				width: 94%;
				padding: 20upx 3%;
				
				.list{
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					.box{
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
						image{
							width: 60%;
							height: calc(71.44vw / 3 * 0.6);
						}
						.text{
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
</style>
 -->