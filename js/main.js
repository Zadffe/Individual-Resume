// 基础交互示例
document.addEventListener('DOMContentLoaded', function() {
  // 可以添加简单的交互效果
  document.querySelectorAll('.skill-tag').forEach(tag => {
      tag.addEventListener('mouseover', function() {
          this.style.transform = 'scale(1.1)';
      });
      tag.addEventListener('mouseout', function() {
          this.style.transform = 'scale(1)';
      });
  });
});