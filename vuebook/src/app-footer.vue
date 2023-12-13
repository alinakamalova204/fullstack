<template>
  <footer class="footer">
    <div>О нас</div>
    <div>Сотрудничество</div>
    <div>Чат поддержки</div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
  // Другие опции компонента
}
</script>

<style>
  .footer{
    display: flex;
    justify-content: space-around;
    background-color: #b45555;
    margin-top: 20px;
  }
</style>