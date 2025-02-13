// 为每个导航链接添加点击事件
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // 移除所有链接和内容的 active 类
    tabLinks.forEach(item => item.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    // 给当前点击的链接添加 active 类
    this.classList.add('active');
    // 根据 data-tab 属性显示对应的内容区域
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});