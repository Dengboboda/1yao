<template>
    <div>
        <!-- 搜索框 -->
    <div class="header_cover" ></div>
    <header class="header header_fixed">
      <div class="download-container " style="display: none;"><img src="data:image/png;base64,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" alt="111" class="download-logo">
        <p class="down-slogan">使用APP享受更多优惠</p>
        <a href="javascript:void(0);" class="btn-down">立即下载</a>
      </div>
      <div class="header-searchBar">
        <div class="logo"></div>
        <div class="address_map">广州</div>
        <div class="searchbar">
          <a href="###" class="search_box">
            <i class="icon icon_search"></i>输入商品名称</a>
        </div>
        <a href="###" class="tel"></a>
      </div>
    </header>
    </div>
</template>
<style>
.header_cover {
  height: 1.2rem;
  background: #f9f9f9;
}
.header,
.header_cover {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  line-height: 1.2rem;
}

.header {
  font-size: 0.4rem;
  text-align: center;
}

.header .iconfont {
  font-size: 0.53333333rem;
  color: #666;
}

.header .logo {
  top: 5px;
  left: 7px;
  width: 1.33333333rem;
  background: url(../assets/logo2.png) no-repeat;
  background-size: auto 0.74666667rem;
}

.header .address_map,
.header .logo {
  position: absolute;
  top: 0;
  height: 1.1rem;
  display: block;
}

.header .address_map {
  left: 1.2rem;
  padding-top: 0.33rem;
  width: 1.2rem;
  line-height: 0.53333333rem;
  font-size: 0.37333333rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
}

.header .searchbar {
  padding: 0 1.73333333rem 0 2.4rem;
  color: #a7a7a7;
}

.header .searchbar .iconfont {
  font-size: 0.42666667rem;
  margin-right: 0.16rem;
  color: #898989;
}

.header .searchbar .search_box {
  height: 0.74666667rem;
  line-height: 0.74666667rem;
  font-size: 0.32rem;
  margin-top: 0.26666667rem;
  padding: 0 0.26666667rem;
  text-align: left;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, 0.9);
  color: #898989;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
}
.header .tel {
  position: absolute;
  top: 12px;
  right: 0;
  width: 1.22666667rem;
  height: 100%;
  line-height: 0.4rem;
  padding-left: 0.26666667rem;
  background: url(../assets/xia.png) no-repeat;
  background-size: 1.22666667rem auto;
}


.header_fixed .searchbar .search_box {
  color: #b8b8be;
  background: hsla(0, 0%, 92%, 0.48);
}

.header_fixed .search .iconfont,
.header_fixed .searchbar .search_box .iconfont {
  color: #b8b8be;
}

.header_fixed .search .search_box {
  background: hsla(0, 0%, 92%, 0.48);
}

.header_fixed .search .search_box input {
  color: #666;
}

.header_fixed .search .search_box input::-webkit-input-placeholder {
  color: #b8b8be;
}

.header_fixed .search .search_box input:-moz-placeholder,
.header_fixed .search .search_box input::-moz-placeholder {
  color: #b8b8be;
}

.header_fixed .search .search_box input:-ms-input-placeholder {
  color: #b8b8be;
}

.header_fixed .logo {
  color: #666;
}

</style>

