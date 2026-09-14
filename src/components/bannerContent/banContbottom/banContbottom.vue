<<template>
  <div class="news-drawer news-bottom-drawer">
    <banContBoLeft />
    <banContBoRight />
  </div>
</template>

<script setup>
import banContBoLeft from './banContBoLeft.vue'
import banContBoRight from './banContBoRight.vue'
</script>

<style scoped lang="scss"> 
.news-drawer{
    position: absolute;
    left: 377.53px;
    top: 537.04px;
    transform: scale(1.06, 1.06);
    width: 1099px;
    height: 216px;
    cursor: pointer;
    border-radius: 8px;
    pointer-events: auto;
    user-select: none;
    z-index: 100;
    // background: rgba(255, 255, 255, 0.5);
}
</style>