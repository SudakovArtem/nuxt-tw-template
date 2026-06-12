<script setup lang="ts">
import type { Props } from './types'

defineOptions({
  name: 'BaseImage'
})

const props = withDefaults(defineProps<Props>(), {
  isLazy: true
})

const isLoadImage = shallowRef<boolean>(false)
const isErrorImage = shallowRef<boolean>(false)

const onLoadImage = (): void => {
  isLoadImage.value = true
  isErrorImage.value = false
}

const onErrorImage = (): void => {
  isErrorImage.value = true
  isLoadImage.value = false
}

const hasError = computed<boolean>(() => !props.image.src || toValue(isErrorImage))

const imageClasses = computed<Record<string, boolean>>(() => ({
  'v-lazy-image-loaded': toValue(isLoadImage),
  'v-lazy-image--error': toValue(hasError),
  'v-lazy-image': !toValue(isLoadImage) || !toValue(hasError)
}))
</script>

<template>
  <img
    v-bind="image"
    :class="imageClasses"
    :loading="(isLazy && 'lazy') || 'eager'"
    @load="onLoadImage"
    @error="onErrorImage"
  />
</template>
