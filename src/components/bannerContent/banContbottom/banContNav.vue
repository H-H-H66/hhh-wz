<<template>
  <div class="wheel-guide" 
   style="transform: scale(1, 1);
    left: 882px;
    top: 817px;
    visibility: visible;
    opacity: 1;">
    <div>
      <img src="/public/image/banner1/moreDown.png">
      <img src="/public/image/banner1/down.png" class="down">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wheel-guide{
    position: absolute;
    z-index: 2;
    transform-origin: 0% 0%;
}
.down{
    position: relative;
    left: -96px;
    top: 5px;
    animation: arrowAni 1s linear infinite
}
@keyframes arrowAni {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>