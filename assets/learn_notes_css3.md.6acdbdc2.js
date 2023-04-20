import{_ as n,c as l,x as s,N as a,o}from"./chunks/framework.0799945b.js";const A=JSON.parse('{"title":"CSS3学习笔记","description":"","frontmatter":{},"headers":[],"relativePath":"learn/notes/css3.md"}'),p={name:"learn/notes/css3.md"},e=a(`<h1 id="css3学习笔记" tabindex="-1"><h1>CSS3学习笔记</h1> <a class="header-anchor" href="#css3学习笔记" aria-label="Permalink to &quot;&lt;h1&gt;CSS3学习笔记&lt;/h1&gt;&quot;">​</a></h1><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8ef97c356ce478387aa069accc542cc~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp" alt="img"></p><h2 id="一、css3新特性" tabindex="-1">一、CSS3新特性 <a class="header-anchor" href="#一、css3新特性" aria-label="Permalink to &quot;一、CSS3新特性&quot;">​</a></h2><div>选择器</div><div>盒模型</div><div>背景和边框: border-radius, box-shadow ,border-image</div><div>文字特效:text-shadow ,text-overflow ,word-wrap ,word-break</div><div>2D/3D转换: 移动, 缩放 ,转动, 拉长或拉伸(transform)</div><div>动画：@keyframes</div><div>多列布局：olumn-count（分割列数）column-gap（列与列间隙）column-rule（列边框样式，同border）column-width（列宽度）</div><div>用户界面：resize:both（由用户去调整大小）box-sizing、outline-offset</div><h2 id="二、具体特效" tabindex="-1">二、具体特效 <a class="header-anchor" href="#二、具体特效" aria-label="Permalink to &quot;二、具体特效&quot;">​</a></h2><h3 id="_1、background" tabindex="-1">1、background <a class="header-anchor" href="#_1、background" aria-label="Permalink to &quot;1、background&quot;">​</a></h3><div>background-image：背景图片，不同的背景图像用逗号隔开，所有的图片中显示在最顶端的为第一张；</div><div>background-size：背景图像相对于父元素的宽度和高度的百分比的大小；</div><div>background-origin：背景图像的位置区域；（content-box | padding-box | border-box）</div><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/448131e4cf57406b8178e0b5e0417553~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp"><div>background-clip：背景剪裁，从指定位置开始绘制，同background-origin</div><h3 id="_2、边框" tabindex="-1">2、边框 <a class="header-anchor" href="#_2、边框" aria-label="Permalink to &quot;2、边框&quot;">​</a></h3><div>box-shadow: h-shadow v-shadow blur spread color inset（同text-shadow的使用）</div><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>h-shadow</td><td>必需，水平阴影的位置，允许负值</td></tr><tr><td>v-shadow</td><td>必需，垂直阴影的位置，允许负值</td></tr><tr><td>blur</td><td>可选，模糊距离</td></tr><tr><td>spread</td><td>可选，阴影的大小</td></tr><tr><td>color</td><td>可选，阴影的颜色。</td></tr><tr><td>inset</td><td>可选，从外层的阴影（开始时）改变阴影内侧阴影</td></tr></tbody></table><div>border-radius</div><ul><li>四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。</li><li>三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角</li><li>两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角</li><li>一个值： 四个圆角值相同</li></ul><h3 id="_3、文字特效" tabindex="-1">3、文字特效 <a class="header-anchor" href="#_3、文字特效" aria-label="Permalink to &quot;3、文字特效&quot;">​</a></h3><hr><ul><li>text-overflow：文本溢出属性，指定应向用户如何显示溢出内容（clip剪切 | ellipsis省略号）</li><li>word-wrap：自动换行（break-word）</li><li>word-break：单词拆分换行（keep-all整个单词换行 | break-all单词被拆分）</li></ul><hr><h3 id="_4、渐变" tabindex="-1">4、渐变 <a class="header-anchor" href="#_4、渐变" aria-label="Permalink to &quot;4、渐变&quot;">​</a></h3><hr><ul><li>线性渐变（linear-gradient）- 向下/向上/向左/向右/对角方向</li><li>径向渐变（radial-gradient）- 由它们的中心定义</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*direction为方向，如to right */</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: linear-gradient(direction</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">color-stop1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">color-stop2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ...);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*angle为水平线和渐变线之间的角度，如90deg*/</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: linear-gradient(angle</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">color-stop1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">color-stop2</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*重复渐变repeating-linear-gradient*/</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: repeating-linear-gradient(red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> yellow 10%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green 20%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*shape为形状，circle | ellipse（椭圆形，默认）*/</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: radial-gradient(shape size at position</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">start-color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last-color</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*重复渐变repeating-radial-gradient*/</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: repeating-radial-gradient(red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> yellow 10%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> green 15%);</span></span></code></pre></div><hr><h3 id="_5、转换" tabindex="-1">5、转换 <a class="header-anchor" href="#_5、转换" aria-label="Permalink to &quot;5、转换&quot;">​</a></h3><h4 id="_2d-转换" tabindex="-1">2D 转换 <a class="header-anchor" href="#_2d-转换" aria-label="Permalink to &quot;2D 转换&quot;">​</a></h4><hr><ul><li>translate()：根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动</li><li>rotate()：给定度数顺时针旋转，负值是允许的，这样是元素逆时针旋转</li><li>scale()：增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数</li><li>skew()：分别表示X轴和Y轴倾斜的角度</li></ul><hr><h4 id="_3d-转换" tabindex="-1">3D 转换 <a class="header-anchor" href="#_3d-转换" aria-label="Permalink to &quot;3D 转换&quot;">​</a></h4><hr><ul><li>ranslate3d(x,y,z)：3D 转化</li><li>scale3d(x,y,z)：3D 缩放转换</li><li>rotate3d(x,y,z,angle)：3D 旋转</li><li>perspective(n)：3D 转换元素的透视视图</li></ul><h2 id="" tabindex="-1"><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78c6c19d88f64bae96b21ae3393aefba~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"> <a class="header-anchor" href="#" aria-label="Permalink to &quot;![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78c6c19d88f64bae96b21ae3393aefba~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)&quot;">​</a></h2><h3 id="_6、过渡" tabindex="-1">6、过渡 <a class="header-anchor" href="#_6、过渡" aria-label="Permalink to &quot;6、过渡&quot;">​</a></h3><h4 id="元素从一种样式逐渐改变为另一种的效果" tabindex="-1">元素从一种样式逐渐改变为另一种的效果 <a class="header-anchor" href="#元素从一种样式逐渐改变为另一种的效果" aria-label="Permalink to &quot;元素从一种样式逐渐改变为另一种的效果&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> width </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> width </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><div style="color:#ffc2fc;">要添加多个样式的变换效果，添加的属性由逗号分隔</div></blockquote><h3 id="_7、动画" tabindex="-1">7、动画 <a class="header-anchor" href="#_7、动画" aria-label="Permalink to &quot;7、动画&quot;">​</a></h3><blockquote><p>@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。</p></blockquote><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@keyframes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">myfirst</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@-webkit-keyframes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">myfirst</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> myfirst </span><span style="color:#F78C6C;">5s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> myfirst </span><span style="color:#F78C6C;">5s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*可以改变任意多的样式任意多的次数,用百分比来规定变化发生的时间*/</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@keyframes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">myfirst</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">0%</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">25%</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">50%</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> green</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="三、其他使用" tabindex="-1">三、其他使用 <a class="header-anchor" href="#三、其他使用" aria-label="Permalink to &quot;三、其他使用&quot;">​</a></h2><hr><h3 id="_1、盒模型" tabindex="-1">1、盒模型 <a class="header-anchor" href="#_1、盒模型" aria-label="Permalink to &quot;1、盒模型&quot;">​</a></h3><ul><li>width(宽) + padding(内边距) + border(边框) = 元素实际宽度</li><li>height(高) + padding(内边距) + border(边框) = 元素实际高 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a50f006498a34bb7a641051bdd43f317~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"></li><li>box-sizing 属性可以设置 width 和 height 属性中是否包含了 padding(内边距) 和 border(边框)，默认为不包含。</li><li>-box-sizing: border-box; padding(内边距) 和 border(边框) 也包含在 width 和 height 中</li><li>box-sizing: content-box；padding(内边距) 和 border(边框) 不包含在 width 和 height 中</li></ul><h3 id="_2、弹性盒子" tabindex="-1">2、弹性盒子 <a class="header-anchor" href="#_2、弹性盒子" aria-label="Permalink to &quot;2、弹性盒子&quot;">​</a></h3><p>一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。</p><p>弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成，设置 display=flex | inline-flex将其定义为弹性容器。</p>`,55),t={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F07%2Fflex-grammar.html",target:"_blank",title:"https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",ref:"nofollow noopener noreferrer"},r=a(`<h3 id="_3、多媒体查询" tabindex="-1">3、多媒体查询 <a class="header-anchor" href="#_3、多媒体查询" aria-label="Permalink to &quot;3、多媒体查询&quot;">​</a></h3><hr><p>根据设置自适应显示，媒体查询可用于检测很多事情，例如：</p><ul><li>viewport(视窗) 的宽度与高度</li><li>设备的宽度与高度</li><li>朝向 (智能手机横屏，竖屏) 。</li><li>分辨率</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> screen </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">480px</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> lightgreen</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><hr>`,6);function c(i,y,D,d,C,F){return o(),l("div",null,[e,s("p",null,[s("a",t,"Flex 布局",512)]),r])}const b=n(p,[["render",c]]);export{A as __pageData,b as default};
