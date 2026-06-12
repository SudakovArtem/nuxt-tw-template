<script setup lang="ts">
import { computed } from 'vue'
import { filename } from 'pathe/utils'

defineOptions({
  name: 'BaseIcon'
})

type Props = {
  name: string
  isSvg?: boolean
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  isSvg: true,
  alt: ''
})

const rawIconsGlob = import.meta.glob<string>('@app/assets/icons/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true
})

const urlIconsGlob = import.meta.glob<string>('@app/assets/icons/**/*.svg', {
  import: 'default',
  eager: true
})

const rawIcons = Object.fromEntries(
  Object.entries(rawIconsGlob).map(([key, value]: [string, any]) => [filename(key), value])
)

const urlIcons = Object.fromEntries(
  Object.entries(urlIconsGlob).map(([key, value]: [string, any]) => [filename(key), value])
)

const iconPath = computed<string>(() => props.name)

const icon = computed<string>(() => {
  const source = props.isSvg ? rawIcons[iconPath.value] : urlIcons[iconPath.value]

  if (!source) {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`)
    return ''
  }

  return source
})
</script>

<template>
  <span v-if="isSvg" class="ui-icon" v-html="icon" />
  <img v-else :src="icon" class="ui-icon" :alt="alt" />
</template>

<style scoped lang="scss">
.ui-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  :deep(svg) {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: unset;
  }
}
</style>
